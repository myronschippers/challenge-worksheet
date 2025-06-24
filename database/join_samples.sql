-- Clients Table
CREATE TABLE clients (
  client_id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Transactions Table
CREATE TABLE transactions (
  transaction_id INT PRIMARY KEY,
  client_id INT,
  amount DECIMAL(10, 2),
  transaction_date DATE,
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

-- BASIC INNER JOIN, (Get all clients with at least one transaction)
SELECT
  c.client_id,
  c.name,
  t.transaction_id,
  t.amount,
  t.transaction_date
FROM clients c
JOIN transactions t ON c.client_id = t.client_id;

-- LEFT JOIN, (Include all clients, even those without transactions)
SELECT
  c.client_id,
  c.name,
  t.transaction_id,
  t.amount,
  t.transaction_date
FROM clients c
LEFT JOIN transactions t ON c.client_id = t.client_id;

-- Count of Transactions per Client
SELECT
  c.client_id,
  c.name,
  COUNT(t.transaction_id) AS total_transactions
FROM clients c
LEFT JOIN transactions t ON c.client_id = t.client_id
GROUP BY c.client_id, c.name;

-- Total Transaction Amount per Client
SELECT
  c.client_id,
  c.name,
  SUM(t.amount) AS total_amount
FROM clients c
LEFT JOIN transactions t ON c.client_id = t.client_id
GROUP BY c.client_id, c.name;

-- Latest Transaction per Client
SELECT
  c.client_id,
  c.name,
  MAX(t.transaction_date) AS latest_transaction
FROM clients c
LEFT JOIN transactions t ON c.client_id = t.client_id
GROUP BY c.client_id, c.name;

-- Clients Without Transactions
SELECT
  c.client_id,
  c.name
FROM clients c
LEFT JOIN transactions t ON c.client_id = t.client_id
WHERE t.transaction_id IS NULL;
