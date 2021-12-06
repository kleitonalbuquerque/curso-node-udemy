var mysql = require("mysql");

var connMySQL = function () {
  // console.log("Conexão com database foi estabelecida!");
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portal_noticias",
  });
};

module.exports = function () {
  return connMySQL;
};
