const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_xGglpQE4RmslL4eKE98ZBn4F3d@salt.db.elephantsql.com:5432/kxgsvnke'; 
const pool = new Pool({ connectionString: URI}); 


const shelfQueryString = (`CREATE TABLE IF NOT EXISTS shelf 
  (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  shelf_name varchar (255) NOT NULL UNIQUE,
  shelf_description varchar (255)
  );
`); 

pool.query(shelfQueryString, (err, res) => {
  if (err) console.log('your in the shelf', err)
  else console.log('Succcesfully Connected to Shelf Table')
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	