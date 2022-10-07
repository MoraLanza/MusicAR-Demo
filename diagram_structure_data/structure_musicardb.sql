CREATE DATABASE musicar_db;
CREATE TABLE users (
id INT PRIMARY KEY auto_increment,
name VARCHAR(45) NOT NULL,
lastName VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL,
password TEXT NOT NULL,
imageUser BLOB NOT NULL
);

CREATE TABLE events (
id INT PRIMARY KEY auto_increment,
artist VARCHAR(255) NOT NULL,
subtitle VARCHAR(255) NOT NULL,
showtype VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
linkMaps TEXT NOT NULL,
linkYoutube TEXT NOT NULL,
imageEvent BLOB NOT NULL
);


CREATE TABLE teaters (
id INT PRIMARY KEY auto_increment,
name VARCHAR(255) NOT NULL,
direction VARCHAR(255) NOT NULL
);

CREATE TABLE tickets (
id INT PRIMARY KEY auto_increment,
price MEDIUMINT NOT NULL,
type VARCHAR(45) NOT NULL,
lot SMALLINT NOT NULL
);

CREATE TABLE functions (
id INT PRIMARY KEY auto_increment,
date DATE NOT NULL,
time DATETIME NOT NULL
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
stateName VARCHAR(255) NOT NULL
);

CREATE TABLE citys (
id INT PRIMARY KEY auto_increment,
cityName VARCHAR(255) NOT NULL
);

ALTER TABLE functions
ADD COLUMN  durationTime TIME NOT NULL;

ALTER TABLE users
ADD COLUMN role_id INT NOT NULL;

ALTER TABLE users ADD FOREIGN KEY (role_id) REFERENCES roles(id);

ALTER TABLE users
ADD COLUMN city_id INT NOT NULL;

ALTER TABLE users
ADD FOREIGN KEY (city_id) REFERENCES citys(id);

ALTER TABLE states
ADD COLUMN country_id INT NOT NULL,
ADD FOREIGN KEY (country_id) REFERENCES countrys(id);

ALTER TABLE citys
ADD COLUMN state_id INT NOT NULL,
ADD FOREIGN KEY (state_id) REFERENCES states(id);

ALTER TABLE teaters
ADD COLUMN city_id INT NOT NULL,
ADD FOREIGN KEY (city_id) REFERENCES citys(id);

ALTER TABLE tickets
ADD COLUMN function_id INT NOT NULL,
ADD FOREIGN KEY (function_id) REFERENCES functions(id);

ALTER TABLE functions
ADD COLUMN event_id INT NOT NULL,
ADD FOREIGN KEY (event_id) REFERENCES events(id);

ALTER TABLE events
ADD COLUMN category_id INT NOT NULL,
ADD COLUMN teater_id INT NOT NULL,
ADD FOREIGN KEY (category_id) REFERENCES categories(id),
ADD FOREIGN KEY (teater_id) REFERENCES teaters(id);

ALTER TABLE functions
MODIFY COLUMN time TIME NOT NULL;

ALTER TABLE tickets 
ADD COLUMN event_id INT NOT NULL,
ADD FOREIGN KEY (event_id) REFERENCES events(id);

ALTER TABLE events 
MODIFY COLUMN imageEvent LONGBLOB;

ALTER TABLE events
ADD COLUMN city_id INT NOT NULL;

Alter table events
add constraint events_ibfk_3
foreign key (city_id) references citys(id);

ALTER TABLE users
ADD COLUMN category_id 	INT,
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

alter table events 
add column state_id INT,
ADD FOREIGN KEY (state_id) REFERENCES states(id); 

alter table events 
add column country_id INT,
ADD FOREIGN KEY (country_id) REFERENCES countrys(id); 