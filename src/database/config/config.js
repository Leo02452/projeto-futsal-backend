require('dotenv').config();

const { MYSQL_HOST, MYSQL_PORT, MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD} = process.env;

module.exports = {
  "development": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": MYSQL_DB_NAME,
    "host": MYSQL_HOST,
    "port": MYSQL_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": MYSQL_DB_NAME,
    "host": MYSQL_HOST,
    "port": MYSQL_PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": MYSQL_DB_NAME,
    "host": MYSQL_HOST,
    "port": MYSQL_PORT,
    "dialect": "mysql"
  }
};
