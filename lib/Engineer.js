const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(engineerGithub, engineerID) {
        super();
        this.engineerGithub = engineerGithub;
        this.ID = engineerID;
    }
    getGithub() {
        // get's the engineer's github link
        return this.engineerGithub
    }

    getRole() {
        //overrides to engineer
        return Engineer
    }

    getID() {
        return this.engineerID;
    }
}



module.exports = Engineer;