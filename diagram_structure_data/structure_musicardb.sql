CREATE DATABASE musicar_db;

CREATE TABLE users (
id INT PRIMARY KEY auto_increment,
name VARCHAR(45) NOT NULL,
lastName VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL,
password TEXT NOT NULL,
imageUser TEXT NOT NULL,
role_id INT NOT NULL, 
city_id INT NOT NULL,
category_id INT NOT NULL
);

CREATE TABLE events (
id INT PRIMARY KEY auto_increment,
artist VARCHAR(255) NOT NULL,
subtitle VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
linkYoutube TEXT NOT NULL,
imageEvent TEXT NOT NULL,
category_id INT NOT NULL,
teater_id INT NOT NULL,
country_id INT NOT NULL,
state_id INT NOT NULL,
city_id INT NOT NULL,
showtype_id INT NOT NULL
);

CREATE TABLE showtypes (
id INT PRIMARY KEY auto_increment,
type VARCHAR(255) NOT NULL
);

CREATE TABLE teaters (
id INT PRIMARY KEY auto_increment,
name VARCHAR(255) NOT NULL,
direction VARCHAR(255) NOT NULL,
city_id INT NOT NULL,
linkMaps TEXT NOT NULL
);

CREATE TABLE tickets (
id INT PRIMARY KEY auto_increment,
price MEDIUMINT NOT NULL,
type VARCHAR(45) NOT NULL,
lot SMALLINT NOT NULL,
function_id INT NOT NULL,
event_id INT NOT NULL
);

CREATE TABLE functions (
id INT PRIMARY KEY auto_increment,
date DATE NOT NULL,
time DATETIME NOT NULL,
durationTime TIME NOT NULL,
event_id INT NOT NULL
);

CREATE TABLE categories (
id INT PRIMARY KEY auto_increment,
name VARCHAR(45) NOT NULL
);

CREATE TABLE roles (
id INT PRIMARY KEY auto_increment,
typeRole VARCHAR(45) NOT NULL
);

CREATE TABLE countrys (
id INT PRIMARY KEY auto_increment,
countryName VARCHAR(255) NOT NULL
);

CREATE TABLE states (
id INT PRIMARY KEY auto_increment,
stateName VARCHAR(255) NOT NULL,
country_id INT NOT NULL
);

CREATE TABLE citys (
id INT PRIMARY KEY auto_increment,
cityName VARCHAR(255) NOT NULL,
state_id INT NOT NULL
);


ALTER TABLE users ADD FOREIGN KEY (role_id) REFERENCES roles(id);

ALTER TABLE users
ADD FOREIGN KEY (city_id) REFERENCES citys(id);

ALTER TABLE states
ADD FOREIGN KEY (country_id) REFERENCES countrys(id);

ALTER TABLE citys
ADD FOREIGN KEY (state_id) REFERENCES states(id);

ALTER TABLE teaters
ADD FOREIGN KEY (city_id) REFERENCES citys(id);

ALTER TABLE tickets
ADD FOREIGN KEY (function_id) REFERENCES functions(id);

ALTER TABLE functions
ADD FOREIGN KEY (event_id) REFERENCES events(id);

ALTER TABLE events
ADD FOREIGN KEY (category_id) REFERENCES categories(id),
ADD FOREIGN KEY (teater_id) REFERENCES teaters(id);

ALTER TABLE tickets 
ADD FOREIGN KEY (event_id) REFERENCES events(id);


ALTER TABLE users
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

alter table events 
ADD FOREIGN KEY (state_id) REFERENCES states(id); 

alter table events 
ADD FOREIGN KEY (country_id) REFERENCES countrys(id); 

ALTER TABLE events
ADD FOREIGN KEY (showtype_id) REFERENCES showtypes(id);

