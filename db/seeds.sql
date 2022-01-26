
INSERT INTO department (department_name)
VALUES ("Grocery"),
       ("Pharmacy"),
       ("Electronics"),
       ("Appliances"),
       ("Home-Improvement");


INSERT INTO role (title, salary)
VALUES ("Produce-Specialist, 40000"),
       ("Pharmacist , 80000"),
       ("Sales, 45000"),
       ("Sales, 50000"),
       ("Building-Materials-Specialist, 70000");

-- Possibly need to add manager_id
INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("James, Michael, 10"),
       ("Robert, William, 11"),
       ("John, David, 12"),
       ("Mary, Smith, 13"),
       ("Patricia, Elizabeth, 14"),
       ("Jennifer, Johnson, 15"); 