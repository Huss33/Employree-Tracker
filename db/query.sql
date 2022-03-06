SELECT name FROM department;

SELECT title FROM role;

SELECT first_name, last FROM employee;

INSERT INTO department (name)
VALUE ("New Department");

INSERT INTO role ("title", salary, department_id)
VALUE ("New Role", 75000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("New", "Employee", 3, NULL);

UPDATE employee
SET role_id = 1
WHERE id = 1;

SELECT *
FROM department
JOIN role ON role.department_id = department.id

SELECT role.title AS Position, role.id, department.name AS Department, role.salary
FROM role
JOIN department ON department.id = role.department_id

SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary, employee.manager_id
FROM employee
JOIN role ON role.id = employee.role_id;

SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary AS Salary, department.name AS Department, CONCAT(m.first_name, ' ', m.last_name) AS manager_id
FROM employee
INNER JOIN role ON role.id = employee.role_id
INNER JOIN department ON department.id = role.department_id
LEFT JOIN employee m ON employee.manager_id = m.id;
