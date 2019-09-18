const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_xGglpQE4RmslL4eKE98ZBn4F3d@salt.db.elephantsql.com:5432/kxgsvnke'; 
const pool = new Pool({ connectionString: URI}); 

const userQueryString = (`CREATE TABLE IF NOT EXISTS users
    (
    "id" SERIAL PRIMARY KEY NOT NULL,
    username varchar (255) NOT NULL UNIQUE,
    password varchar (255) NOT NULL UNIQUE,
    first_name varchar (255) NOT NULL,
    last_name varchar (255) NOT NULL,
    email varchar (255) NOT NULL,
  );
`); 

pool.query(userQueryString, (err, res) => {
  if (err) console.log(err)
  else console.log('Succcesfully Connected to User Table')
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	
    
  
  