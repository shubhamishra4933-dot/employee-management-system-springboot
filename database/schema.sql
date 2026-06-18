
CREATE DATABASE IF NOT EXISTS emsdb;
USE emsdb;

CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    enabled BOOLEAN DEFAULT TRUE
);

-- Default Admin User (password should be encrypted in real project)
INSERT INTO users (username, password, role, enabled)
VALUES ('admin', '$2a$10$encryptedpasswordhere', 'ADMIN', true);


-- EMPLOYEES TABLE

CREATE TABLE employees (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL,
    designation VARCHAR(100),
    salary DOUBLE NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    joining_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SAMPLE DATA
INSERT INTO employees (name, email, department, designation, salary, phone, address, joining_date)
VALUES 
('Rahul Sharma', 'rahul@gmail.com', 'IT', 'Developer', 50000, '9876543210', 'Mumbai', '2024-01-10'),
('Amit Verma', 'amit@gmail.com', 'HR', 'Manager', 60000, '9876500000', 'Pune', '2023-12-05');

-- ROLES (OPTIONAL ADVANCED)
CREATE TABLE roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO roles (name) VALUES ('ADMIN'), ('HR'), ('EMPLOYEE');
