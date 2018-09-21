CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INT(11) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);