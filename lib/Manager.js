const { MODULEDECLARATION_TYPES } = require('@babel/types');
const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(name = '') {
    super(name); 
    this.officeNumber = 0;
    }

    
    
}


module.exports = Manager;