const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_xGglpQE4RmslL4eKE98ZBn4F3d@salt.db.elephantsql.com:5432/kxgsvnke%E2%80%99;'; 
const pool = new Pool({ connectionString: URI}); 


const userBooksQueryString = (`CREATE TABLE IF NOT EXISTS user_books
  (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
  rating serial(255),
  review serial(255),
  status serial(255) NOT NULL,
  );
`); 

pool.query(userBooksQueryString, (err, res) => {
  if (err) console.log(err)
  else console.log('Succcesfully Created to User BOoks Table')
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	