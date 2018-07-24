DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers(
    id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR (45),
    devoured BIT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);