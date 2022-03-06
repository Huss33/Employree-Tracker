
INSERT INTO department (department_name)
VALUES ("Grocery"),
       ("Pharmacy"),
       ("Electronics"),
       ("Appliances"),
       ("Home-Improvement");


INSERT INTO role (title, salary, department_id)
VALUES ("Produce Specialist", 40000, 1),
       ("Pharmacist", 80000, 2),
       ("Electronic Sales", 45000, 3),
       ("Appliance Sales", 50000, 4),
       ("Building Materials Specialist", 70000, 5);

-- Possibly need to add manager_id
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Michael", 1, NULL),
       ("Robert", "William", 2, NULL),
       ("John", "David", 3, NULL),
       ("Mary", "Smith", 4, NULL),
       ("Patricia", "Elizabeth", 5, NULL);
