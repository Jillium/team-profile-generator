const { generate } = require('escodegen');
const inquirer = require('inquirer');

const generateManager = () => {
    console.log(`Let's build your team profile!`)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is your manager's name? (Required)",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log("Please enter your manager's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is your manager's ID? (Required)",
                validate: managerId => {
                    if (managerId) {
                        return true;
                    } else {
                        console.log("Please enter your manager's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your manager's email? (Required)",
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    } else {
                        console.log("Please enter your manager's email!")
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is your manager's office number? (Required)",
                validate: managerOffice => {
                    if (managerOffice) {
                        return true;
                    } else {
                        console.log("Please enter your manager's office number!")
                        return false;
                    }
                }
            }
        ])


}

const generateEmployee = () => {
    console.log(`Let's add some employees!`)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: "What is the employee name? (Required)",
                validate: employeeName => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log("Please enter your employee's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is the employee's ID? (Required)",
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log("Please enter your employee's ID!")
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'employeeRole',
                message: "What is the employee's role?",
                choices: ['Engineer', 'Intern']
            }])
        .then(({ employeeRole }) => {
            if (employeeRole === 'Intern') {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'internSchool',
                            message: "What is the intern's school?"
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddEmployee',
                            message: 'Would you like to enter another employee?',
                            default: false
                        }

                    ])
                    .then(employeeData => {
                        if (employeeData.confirmAddEmployee) {
                            return generateEmployee();
                        } else {
                            return
                        }
                    })
            } else {
                if (employeeRole === 'Engineer') {
                    return inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'engineerGithub',
                                message: "What is the engineer's github?"
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddEmployee',
                                message: 'Would you like to enter another employee?',
                                default: false
                            }
                        ])
                        .then(employeeData => {
                            if (employeeData.confirmAddEmployee) {
                                return generateEmployee();
                            } else {
                                return
                            }
                        })
                }
            }
        })


}


generateManager()
    .then(generateEmployee)


