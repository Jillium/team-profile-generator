const Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor(name = '') {
        super(name);
        this.school = '';
    }

    getSchool() {
        // gets the interns school
    }

    getRole() {
        //overrides to intern
    }
}


getSchool();

getRole();
// overrides to intern
module.exports = Intern;