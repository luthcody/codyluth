import { Sequelize } from 'sequelize';
import { getSecretValue } from './keyvault';
import models from './databaseDefinitions/models';

async function getSequelizeConnection() {
  const databaseUser = await getSecretValue('db-main-user');
  const databasePassword = await getSecretValue('db-main-pass');

  const sequelize = new Sequelize(process.env.MAIN_DATABASE_NAME, databaseUser, databasePassword, {
    host: process.env.MAIN_DATABASE_HOST,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        requestTimeout: 30000
      }
    },
  })

  return models(sequelize);
}

async function syncDatabase() {
  const db = await getSequelizeConnection();
  return db.sync({ force: true });
}

async function getAllLists() {
  const db = await getSequelizeConnection();
  const results = await db.query('SELECT * FROM grocery_lists');

  return results[0];
}

async function getListMealsAndItems(listId: string) {
  const db = await getSequelizeConnection();
  const mealPromise = db.query('SELECT meal_id, name FROM grocery_list_meals JOIN grocery_meals on grocery_meals.id = grocery_list_meals.meal_id where list_id = :listId', { replacements: { listId: listId } });
  const itemPromise = db.query(`
    SELECT item_id, grocery_items.name, package_type, location, category, completed, SUM(quantity) as 'quantity', grocery_stores.name as 'location'
    FROM grocery_list_items
    JOIN grocery_items on grocery_items.id = grocery_list_items.item_id
    JOIN grocery_stores on grocery_stores.id = grocery_items.location
    where list_id = :listId
    GROUP BY item_id, grocery_items.name, package_type, location, category, completed, grocery_stores.name
    ORDER BY category, grocery_items.name
  `, { replacements: { listId: listId } });
  const listNamePromise = db.query('SELECT TOP 1 name FROM grocery_lists where id = :listId', { replacements: { listId } });

  const [ mealResults, itemResults, listName ] = await Promise.all([mealPromise, itemPromise, listNamePromise])

  return { listName: listName, meals: mealResults, items: itemResults };
}

async function updateListItemCompleted(listId: string, itemId: string, completed: boolean) {
  const db = await getSequelizeConnection();
  const results = await db.query('UPDATE grocery_list_items SET completed = :completed where list_id = :listId and item_id = :itemId', {
    replacements: {
      completed,
      listId,
      itemId
    }
  })

  return results;
}

export {
  syncDatabase,
  getAllLists,
  getListMealsAndItems,
  updateListItemCompleted
}
