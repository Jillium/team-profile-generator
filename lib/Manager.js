const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(officeNumber) {
    
    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        // gets the office number
        return this.officeNumber
    }

    getRole() {
        return Manager;

    }
    
}


module.exports = Manager;