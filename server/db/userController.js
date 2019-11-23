const db = require("./db");
const userController = {};
userController.postuser = (req, res, next) => {
  console.log("***Inside the post-user middleware");
  console.log(req.body);
  const params = [
    req.body.firstName,
    req.body.lastName,
    req.body.username,
    req.body.email,
    req.body.password
  ];
  db.query(
    "INSERT INTO users (firstName, lastName, username, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *;",
    params,
    (err, result) => {
      if (err) {
        console.log(err);
        return next(`There was an error adding the message ${err}`);
      } else {
        const newUser = result.rows[0];
        res.locals.addedUser = newUser.username;
        console.log(
          `This is what is getting savied on res.locals: ${res.locals.addedUser}`
        );
        return next();
      }
    }
  );
};

module.exports = userController;
