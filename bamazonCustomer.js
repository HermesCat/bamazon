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




//users can choose an item from the list
function inquirerProduct() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
  inquirer.prompt([
    {
      type: "input",
      name: "itemID",
      message: "What is the ID of the product you would like to buy?"
    },
    {
      type: "input",
      name: "quantity",
      message: "How many units would you like?"
    }
  //establish which item they are refering to
  ]).then(function(data) {
    var chosenItem;
    var itemQuantity;
    var itemPriceRaw;
    var itemPrice;
    for (var i = 0; i < results.length; i++) {
       if (results[i].id === parseInt(data.itemID)) {
       chosenItem = results[i].id;
       itemQuantity = results[i].stock_quantity;
       itemPriceRaw = results[i].price;
       itemPrice = itemPriceRaw.toFixed(2);
      } 
    } 
      if (itemQuantity < parseInt(data.quantity)) {
        console.log("Sorry, we do not have enough in stock.")
      } else {
        console.log("Your order total is $" + (itemPrice *= (parseInt(data.quantity))));
      }
    });
    connection.end();
  });
}







//this will print all items and the department
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
      inquirerProduct();
    });
  }
  