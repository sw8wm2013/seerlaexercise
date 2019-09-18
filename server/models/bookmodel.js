const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_xGglpQE4RmslL4eKE98ZBn4F3d@salt.db.elephantsql.com:5432/kxgsvnke'; 
const pool = new Pool({ connectionString: URI}); 


const bookQueryString = (`CREATE TABLE IF NOT EXISTS books
  (
  id SERIAL PRIMARY KEY NOT NULL,
  isbn varchar (255) NOT NULL UNIQUE,
  book_title varchar (255) NOT NULL,
  author varchar (255) NOT NULL,
  genre varchar (255) NOT NULL UNIQUE,
  year_published varchar (255) NOT NULL,
  language varchar (255),
  medium varchar (255),
  publisher varchar (255)
  );
`); 

pool.query(bookQueryString, (err, res) => {
  if (err) console.log('your in the books', err)
  else console.log('Succcesfully Connected to Book Table')
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	
