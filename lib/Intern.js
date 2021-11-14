const Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor(internSchool, internID) {
        super();
        
        this.internSchool = internSchool;
        this.internID = internID;
    }

    getSchool() {
        // gets the interns school
        return this.internSchool
    }

    getRole() {
        //overrides to intern
        return Intern
    }

    getID() {
        return this.internID;
    }
}




module.exports = Intern;