const { Pool, Client } = require("pg")

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const connectionString = `postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE}`;

console.log(connectionString);

const pool = new Pool({ connectionString: connectionString });
pool.connect();

module.exports=pool;