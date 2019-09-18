const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_xGglpQE4RmslL4eKE98ZBn4F3d@salt.db.elephantsql.com:5432/kxgsvnke%E2%80%99;'; 
const pool = new Pool({ connectionString: URI}); 


const bookShelfQueryString = (`CREATE TABLE IF NOT EXISTS book_shelf 
  (
    id serial primary key(255) NOT NULL,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    shelf_id INTEGER REFERENCES shelf(id) ON DELETE CASCADE
  );
`); 

pool.query(bookShelfQueryString, (err, res) => {
  if (err) console.log(err)
  else console.log('Succcesfully Created to Book Shelf Table')
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	