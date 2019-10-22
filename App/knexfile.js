
require('dotenv').config()

const localPg = {
  host: '127.0.0.1',
  user: 'Erin_Koen',
  password: 'sdawq',
  database: 'Portfolio_Website'
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
