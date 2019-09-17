const { Pool } = require('pg');
const URI = 'postgres://kxgsvnke:V527n_...@salt.db.elephantsql.com:5432/kxgsvnke'; 
const pool = new Pool({ connectionString: URI}); 


const userBooksQueryString = (`CREATE TABLE IF NOT EXISTS user_books
  (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "book_id" INTEGER REFERENCES books(id) ON DELETE CASCADE,
  "rating" serial(255),
  "review" serial(255),
  "status" serial(255) NOT NULL,
  );
`); 

pool.query(userBooksQueryString, (err, res) => {
  if (err) console.log(err)
  else console.log('Succcesfully Connected to User BOoks Table')
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
	