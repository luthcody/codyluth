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

async function getData() {
  const db = await getSequelizeConnection();

  const authRes = await db.authenticate();
  const results = await db.query('SELECT * FROM grocery_items');
  console.log(results);

  return results;
}

export {
  getData
}
