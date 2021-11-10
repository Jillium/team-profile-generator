const Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor(name = '') {
        super(name);
        this.school = '';
    }
}


getSchool();

getRole();
// overrides to intern
module.exports = Intern;