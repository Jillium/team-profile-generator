const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.github = '';
    }
    getGithub() {
        // get's the engineer's github link
    }

    getRole() {
        //overrides to engineer
    }
}


getGithub();

getRole();
// overrides to engineer
module.exports = Engineer;