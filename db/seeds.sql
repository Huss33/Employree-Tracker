
INSERT INTO department (name)
VALUE ("Grocery"),
      ("Pharmacy"),
      ("Electronics"),
      ("Appliances"),
      ("Home-Improvement");


INSERT INTO role (title, salary, department_id)
VALUE ("Produce Specialist", 40000, 1),
      ("Pharmacist", 80000, 2),
      ("Electronic Sales", 45000, 3),
      ("Appliance Sales", 50000, 4),
      ("Building Materials Specialist", 70000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("James", "Michael", 1, NULL),
      ("Robert", "William", 2, NULL),
      ("John", "David", 3, NULL),
      ("Mary", "Smith", 4, 1),
      ("Patricia", "Elizabeth", 5, NULL);
