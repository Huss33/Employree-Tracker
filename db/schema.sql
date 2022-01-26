DROP DATABASE IF EXISTS owner_db;
CREATE DATABASE owner_db;

USE owner_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) to hold department name
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) to hold role title,
    salary DECIMAL to hold role salary,
    department_id INT to hold reference to department role belongs to,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) to hold employee first name,
    last_name VARCHAR(30) to hold employee last name,
    role_id INT to hold reference to employee role,
    manager_id INT to hold reference to another
    employee that is the manager of the current employee
    (`null` if the employee has no manager),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);