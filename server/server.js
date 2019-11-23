const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const userController = require("./db/userController");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/build", express.static(path.resolve(__dirname, "../build")));

app.get("/*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "../index.html"))
);

app.post("/api/registeruser", userController.postuser, (req, res) => {
  console.log(req.body);
  res.status(200).json(res.locals.addedUser);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log("Listening on Port 3000");
});
