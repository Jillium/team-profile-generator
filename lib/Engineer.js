const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(github) {
        
        this.github = github;
    }
    getGithub() {
        // get's the engineer's github link
        return this.github
    }

    getRole() {
        //overrides to engineer
        return Engineer
    }
}



module.exports = Engineer;