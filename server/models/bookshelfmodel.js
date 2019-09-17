const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_...@salt.db.elephantsql.com:5432/kxgsvnke'; 
const pool = new Pool({ connectionString: URI}); 


const bookShelfQueryString = (`CREATE TABLE IF NOT EXISTS book_shelf 
  (
    "id" serial(255) NOT NULL,
    "book_id" INTEGER REFERENCES books(id) ON DELETE CASCADE,
    "shelf_id" INTEGER REFERENCES shelf(id) ON DELETE CASCADE
  );
`); 

pool.query(bookShelfQueryString, (err, res) => {
  if (err) console.log(err)
  else console.log('Succcesfully Connected to Book Shelf Table')
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	