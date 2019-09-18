const userDB = require('./models/usermodel'); 
const bcrypt = require('bcrypt');

const authController = {

signup: (req, res, next) => {
  const { userName, password } = req.body;
  bcrypt.hash(password, 10, function(err, hash) {
    const params = [userName, hash]
    userDB.query('INSERT INTO users (userName, password) VALUES ($1, $2) returning *;', params, (err, data) => {
      if (err) {
        return next(err);
      } else {
        console.log('User Created and Password Hashed')
        const item = data.rows[0];
        console.log(item)
        res.locals.user = item;
        return next();
      }
    })
  });
},

login: async (req, res, next) => {
    const {userName, password } = req.body;
    const param = [userName];
    userDB.query(`SELECT password FROM users WHERE username = ($1);`, param, (err, data) => {
      if (err) {
        return next(err);
      } else {
        console.log('Password Retrieved')
        const password = data.rows[0].password;
        res.locals.password = password;
      }
    });

    const match = await bcrypt.compare(password, res.locals.password)

    if (match) {
      return next();
    } else {
      console.log('password not in database')
    }
},


};
