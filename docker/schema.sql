CREATE DATABASE IF NOT EXISTS ConstructCloud;

USE ConstructCloud;

CREATE TABLE IF NOT EXISTS healthcheck (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO healthcheck (message) VALUES ('Database initialized successfully');
