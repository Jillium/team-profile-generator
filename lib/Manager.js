const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(name = '') {
    super(name); 
    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        // gets the office number
        return this.officeNumber
    }

    getRole() {
        // overrides to manager 

    }
    
}


module.exports = Manager;