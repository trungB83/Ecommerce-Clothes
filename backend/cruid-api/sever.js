var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
app.use(bodyParser.json());
app.use(mysql.connect());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// route mặc định
app.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});
// chỉnh port
app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});
module.exports = app;

var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_js_api",
});
// kết nối vào cơ sở dữ liệu
dbConn.connect();

app.get("/users", function (req, res) {
  dbConn.query("SELECT * FROM users", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "users list." });
  });
});
