
require('dotenv').config()

const localPg = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
}

const pg = require('pg');

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'pg',
    connection: {
      filename: "./data/test.db3"
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
   production: {
    client: 'postgresql',
    connection: dbConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
