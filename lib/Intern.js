const Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor(school, ID) {
        
        this.school = school;
        this.ID = ID;
    }

    getSchool() {
        // gets the interns school
        return this.school
    }

    getRole() {
        //overrides to intern
        return Intern
    }
}



module.exports = Intern;