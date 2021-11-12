const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(name = '') {
    super(name); 
    this.officeNumber = 0;
    }

    getOfficeNumber() {
        // gets the office number
    }

    getRole() {
        // overrides to manager 
    }
    
}

getOfficeNumber();

getRole();
// overides to manager
module.exports = Manager;