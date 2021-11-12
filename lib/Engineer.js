const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.github = '';
    }
    getGithub() {
        // get's the engineer's github link
        return this.github
    }

    getRole() {
        //overrides to engineer
    }
}



module.exports = Engineer;