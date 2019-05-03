DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("men's polo shirt", "men's clothing", 20.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("men's henley shirt", "men's clothing", 25.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("men's t-shirt", "men's clothing", 10.50, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("men's blue jeans", "men's clothing", 55.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("women's blue jeans", "women's clothing", 65.50, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("women's distressed jeans", "women's clothing", 125.50, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("women's navy cardigan", "women's clothing", 45.50, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("women's black cardigan", "women's clothing", 45.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blue shampoo", "health and beauty", 5.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("red shampoo", "health and beauty", 15.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("men's deoderant", "health and beauty", 7.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("women's deoderant", "health and beauty", 9.50, 20);