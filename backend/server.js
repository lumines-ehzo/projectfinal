var express = require("express");
var cors = require("cors");
var app = express();
const mysql = require("mysql2");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
require("dotenv").config();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

// Connect Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carparking",
});
console.log("Database  Connected!!");

app.get("/api/users", function (req, res, next) {
  connection.query("SELECT * FROM `users", function (err, results, fields) {
    res.json(results);
  });
});

// app.get("/api/booking", function (req, res, next) {
//   connection.query("SELECT * FROM `booking", function (err, results, fields) {
//     res.json(results);
//   });
// });

// app.get("/api/carparking", function (req, res, next) {
//   connection.query("SELECT * FROM `parking", function (err, results, fields) {
//     res.json(results);
//   });
// });

// Route
// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT;
app.listen(6969, function () {
  console.log("Server is running on PORT:", PORT);
});
