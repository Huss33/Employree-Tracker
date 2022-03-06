const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const conTab = require('console.table');


const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'owner_db'
    },
    console.log(`Connected to owner_db`)
);

const init = () => {
     inquirer.prompt([
            {
                type: "list",
                message: "Select option",
                name: "optList",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
            },
        ])
        .then((choices) => {
            console.log(choices.name);
            switch (choices.name) {
                case "view all departments":
                    console.log("view all departments")
                    db.query('SELECT * FROM department', function (err, result) {
                        if (err) {
                           console.log(err);
                        }
                        console.table(result);
                        init();
                    });
                    break;

                case "view all roles":
                    console.log("view all roles")
                    db.query('SELECT role.title AS Position, role.id, department.name AS Department, role.salary FROM role JOIN department ON department.id = role.department_id', (err, result) => {
                        if (err) {
                           console.log(err);
                        }
                        console.table(result);
                        init();
                    });
                    break;

                case "view all employees":
                    console.log("view all employees")
                    db.query('SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary AS Salary, department.name AS Department, CONCAT(m.first_name, " " , m.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee m on employee.manager_id = m.id', (err, result) => {
                        if (err) {
                           console.log(err);
                        }
                        console.table(result);
                        init();
                    });
                    break;
                    
                case "add a department":
                    console.log("add a department");
                    inquirer.prompt([
                        {
                            name: "optList",
                            type: "input",
                            message: "Choose a department to add"
                        }
                    ]).then(function (res) {
                        db.query(
                            "INSERT INTO department SET ? ",
                            {
                                name: res.name
                            },
                            function (err) {
                                if (err) throw err
                                console.table(res);
                                init();
                            }
                        )
                    });
                    break;

                case "add a role":
                    console.log("add a role")
                    db.query('SELECT role.title AS Title, role.salary AS Salary FROM role', function (err, res) {
                        inquirer.prompt([
                            {
                                name: "Title",
                                type: "input",
                                message: "role Title"
                            },
                            {
                                name: "Salary",
                                type: "input",
                                message: "role Salary"
                            },
                            {
                                name: "Department",
                                type: "input",
                                message: "department id for role"
                            }
                        ]).then(function (res) {
                            db.query(
                                "INSERT INTO role SET ?",
                                {
                                    title: res.Title,
                                    salary: res.Salary,
                                    department_id: res.Department
                                },
                                function (err) {
                                    if (err) throw err
                                    console.table(res);
                                    init();
                                }
                            )
                        });
                    });
                    break;

                case "add an employee":
                    console.log("add an employee")
                    db.query(`SELECT * FROM role`, (err, roleRes) => {
                        if (err) {
                            console.log(err);
                        }
                        roleRes = roleRes.map((roles) => {
                            return {
                                name: roles.title,
                                value: roles.id
                            };
                        })
                    });
                    db.query(`SELECT first_name, last_name, id FROM employee`, (err, managerRes) => {
                        if (err) {
                            console.log(err);
                        }
                        managerRes = managerRes.map((managers) => {
                            return {
                                name: managers.first_name + " " + managers.last_name,
                                value: managers.id
                            };
                        });
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'employeeFirstName',
                                message: 'enter employee first name'
                            },
                            {
                                type: 'input',
                                name: 'employeeLastName',
                                message: 'enter employee last name'
                            },
                            {
                                type: 'list',
                                name: 'employeeRole',
                                message: 'select role for employee',
                                choices: roleRes
                            },
                            {
                                type: 'list',
                                name: 'employeeManager',
                                message: 'select employee manager',
                                choices: managerRes
                            }
                        ]).then((answer) => {
                            db.query(`INSERT INTO employee SET ?`,
                            {
                                first_name: answer.employeeFirstName,
                                last_name: answer.employeeLastName,
                                role_id: answer.employeeRole,
                                manager_id: answer.employeeManager
                            },
                            (err, result) => {
                                if (err) {
                                    console.log(err);
                                }
                                console.log('new employee added')
                                init();
                            })
                        })
                    })
                    break;

                case "update an employee role":
                    console.log("update an employee role")
                    db.query(`SELECT * FROM role`, (err, roleRes) => {
                        if (err) {
                            console.log(err);
                        }
                        roleRes = roleRes.map((roles) => {
                            return {
                                name: roles.title,
                                value: roles.id
                            };
                        });
                        db.query(`SELECT first_name, last_name, id FROM employee`, (err, managerRes) => {
                            if (err) {
                                console.log(err);
                            }
                            managerRes = managerRes.map((managers) => {
                                return {
                                    name: managers.first_name + " " + managers.last_name,
                                    value: manager.id
                                };
                            });
                            inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'employeeManager',
                                    message: 'select employee you want to update',
                                    choices: managerRes
                                },
                                {
                                    type: 'list',
                                    name: 'employeeRole',
                                    message: 'select new role for employee',
                                    choices: roleRes
                                }
                            ]).then((answer) => {
                                db.query(`UPDATE employee SET ? WHERE ?`,
                                [{ role_id: answer.employeeRole }, { id: answer.employeeManager}],
                                (err, result) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                    console.log('employee role updated')
                                    init();
                                })
                            })
                        })
                    })
                    break;

                case "all done":
                    console.log("all done");
                    break;
            }
        });
        
}

init();