const Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor(name = '') {
        super(name);
        this.school = '';
    }
}

module.exports = Intern;