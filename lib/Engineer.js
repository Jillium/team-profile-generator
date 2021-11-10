const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.github = '';
    }
}


getGithub();

getRole();
// overrides to engineer
module.exports = Engineer;