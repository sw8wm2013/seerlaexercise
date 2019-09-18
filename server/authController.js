const userDB = require('./models/usermodel'); 
const bcrypt = require('bcrypt');

const authController = {

signup: (req, res, next) => {
  const { userName, password, firstName, lastName, email} = req.body;
  bcrypt.hash(password, 10, function(err, hash) {
    const params = [userName, hash, firstName, lastName, email]
    userDB.query('INSERT INTO users (username, password, first_name, last_name, email ) VALUES ($1, $2, $3, $4, $5) returning *;', params, (err, data) => {
      if (err) {
        return next(err);
      } else {
        const item = data.rows[0];
        res.locals.user = item;
        return next();
      }
    })
  });
},

login: (req, res, next) => {
    const {userName, password } = req.body;
    const param = [userName];
     userDB.query(`SELECT password FROM users WHERE username = ($1);`, param, (err, data) => {
      if (err) {
        return next(err);
      } else {
        const hashedPassword = data.rows[0].password;
        res.locals.password = hashedPassword;
        bcrypt.compare(password, res.locals.password)
        .then((res) => {
          if (res) return next();
          else console.log('password not in database');
        });
    }
  });
  },
}



module.exports = authController;
