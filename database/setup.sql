-- Create a new database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS YourDatabaseName;

-- Use the newly created database
USE YourDatabaseName;

-- Create the `clients` table
CREATE TABLE IF NOT EXISTS clients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
);
-- ALTERNATE CREATE QUERY
CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
  PRIMARY KEY(id)
);

-- Add data to the `clients` table
INSERT INTO clients (first_name, last_name)
VALUES ("Fred", "Fish"),
  ("Larry", "Lobster"),
  ("Bubble", "Bass");

-- GET ALL DATA from `clients`
SELECT * FROM clients;

-- Create `transactions` table (one-to-one relationship)
CREATE TABLE transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  amount DECIMAL(5,  2),
  client_id INT
);

-- ADD CONSTRAINT after table creation
ALTER TABLE transactions
ADD CONSTRAINT fk_client_id
FOREIGN KEY(client_id) REFERENCES clients(id);

-- Add Data to the `transactions`
INSERT INTO transactions
VALUES (4.99, 3),
  (2.89, 2),
  (3.38, 3),
  (4.99, 1);

-- GET ALL DATA from `transactions`
SELECT * FROM transactions;

-- Create the `appointments` table
CREATE TABLE IF NOT EXISTS appointments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  location VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  start_datetime TIMESTAMP NOT NULL,
  start_date DATE,
  start_time TIME,
  duration_minutes INT
);

-- Add Data to the `appointments`
INSERT INTO appointments
VALUES ('344 South Street', 'Mediation and Me', NOW(), CURRENT_DATE(), CURRENT_TIME(), 120),
  ('85 McFadden Ave', 'Get Right', NOW() + 1, NULL, NULL, 90);

-- Create the Join Table to establish a many-to-many relationship
CREATE TABLE clients_appointments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (appointment_id) REFERENCES appointments(id)
);

-- INNER JOIN select all roles that have mating customer ids
SELECT * FROM transactions
INNER JOIN clients
ON transactions.client_id = clients.id;

-- LEFT JOIN
SELECT * FROM transactions
LEFT JOIN clients
ON transactions.client_id = clients.id;

-- RIGHT JOIN
SELECT * FROM transactions
RIGHT JOIN clients
ON transactions.client_id = clients.id;
