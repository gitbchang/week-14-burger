CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	burger_id INTEGER(11) auto_increment PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    is_eaten boolean NOT NULL

);