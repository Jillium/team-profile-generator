const { getNodeSourceCodeLocation } = require('parse5/lib/tree-adapters/default');
const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(name = '') {
    super(name); 
    this.officeNumber = 0;
    }

    
    
}

getOfficeNumber();

getRole();
// overides to manager
module.exports = Manager;