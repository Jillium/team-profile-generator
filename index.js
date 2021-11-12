const { generate } = require('escodegen');
const inquirer = require('inquirer');

const generateManager = () => {
    console.log(`Let's build your team profile!`)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is your manager's name?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is your manager's ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your manager's email?"
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is your manager's office number?"
            }
        ])


}

const generateEmployee = () => {
    console.log(`Let's add some employees!`)
    return inquirer
        .prompt(
            {
                type: 'input',
                name: 'employeeName',
                message: "What is the employee name?"
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is the employee's ID?"
            },
            {
                type: 'list',
                name: 'employeeRole',
                message: "What is the employee's role?",
                choices: ['Engineer', 'Intern']
            })
        .then(({ employeeRole }) => {
            if (employeeRole === 'Intern') {
                return inquirer
                    .prompt(
                        {
                            type: 'input',
                            name: 'internSchool',
                            message: "What is the intern's school?"
                        }
                    )
            } else {
                if (employeeRole === 'Engineer') {
                    return inquirer
                        .prompt(
                            {
                                type: 'input',
                                name: 'engineerGithub',
                                message: "What is the engineer's github?"
                            }
                        )
                }
            }
        })

}


generateManager()
    .then(generateEmployee)
