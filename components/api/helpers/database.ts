import { Sequelize } from 'sequelize';
import { getSecretValue } from './keyvault';

async function getSequelizeConnection() {
  const databaseUser = await getSecretValue('db-main-user');
  const databasePassword = await getSecretValue('db-main-pass');

  return new Sequelize(process.env.MAIN_DATABASE_NAME, databaseUser, databasePassword, {
    host: process.env.MAIN_DATABASE_HOST,
    dialect: 'mssql'
  })
}

async function getAllLists() {
  const db = await getSequelizeConnection();
  const results = await db.query('SELECT * FROM grocery_lists');

  return results[0];
}

export {
  getAllLists
}
