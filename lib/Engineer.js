const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.github = '';
    }
}

module.exports = Engineer;