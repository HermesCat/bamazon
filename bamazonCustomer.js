var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Hermes1Cat",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", 
    function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      for (var i = 0; i < res.length; i++) {
          console.log (res[i].id + ".) " +
        "Item: " + res[i].product_name + "\n" +
          " Department: " + res[i].department_name + "\n");
      }
      connection.end();
    });
  }
  