--view all departments
SELECT * FROM department;
--view all roles
SELECT * FROM role;
--view all employees
SELECT * FROM employee;
--add a department
INSERT INTO department (department_name)
VALUE ("New Department");
--add a role
INSERT INTO role ("title", salary, department_id)
VALUE ("New Role title", new salary, new department_id);
--add an employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("New Employee first name", "new last name", new role_id, new manager_id);
--update an employee role
UPDATE role
SET title = "New title"
WHERE id = (id); --possibly (?)
--Delete
DELETE from (table name)
WHERE id = (id); --possibly (?)

--put these in index.js
 --db.query('SELECT title AS Roles FROM role', (err, result) => {
                --if (err) {
                    --console.log(err);
                --}
                --console.table(result);
                --init();
            --});
