-- School Database
DROP DATABASE IF EXISTS School_database;

CREATE DATABASE School_database;

USE School_database;

DROP TABLE IF EXISTS class;

CREATE TABLE Class (
 id int NOT NULL,
 PRIMARY KEY (id),
 name varchar(255) NOT NULL,
 begins DATETIME,
 ends DATETIME);
 
 DROP TABLE IF EXISTS student;

 CREATE TABLE Student (
 id int NOT NULL,
 PRIMARY KEY (id),
 name varchar(255) NOT NULL,
 email varchar(255), 
 phone varchar(22),
 class_id int NOT NULL,
 FOREIGN KEY (class_id) REFERENCES class(id));

CREATE INDEX idx_name
ON student (name);


ALTER TABLE class ADD status ENUM('not started','ongoing','finished') NOT NULL; --(this code works fine, but on VScode gives me an error I donno why)









