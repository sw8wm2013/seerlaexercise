const { Pool } = require("pg");
const connectionString =
  "postgres://jcajvinn:Xysvb_R9ek3VkWnXqedgeo-mN0DQAYM4@salt.db.elephantsql.com:5432/jcajvinn";
const pool = new Pool({ connectionString: connectionString });

const queryString = `CREATE TABLE IF NOT EXISTS users (
  _id SERIAL PRIMARY KEY NOT NULL, 
  firstName VARCHAR NOT NULL, 
  lastName VARCHAR NOT NULL, 
  username VARCHAR (255) NOT NULL,
  email VARCHAR NOT NULL UNIQUE, 
  password VARCHAR
  );`;

pool.query(queryString, (err, result) => {
  if (err) {
    console.log(`There was an error setting up the database: ${err}`);
  } else {
    console.log("You have successfully created the database!");
  }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
