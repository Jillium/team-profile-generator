class Employee {
    constructor(name = '') {
        this.name = name;
        this.email = '';
        this.id = 0;
        
        

    }

    getName() {
        // get's the employees name
        return this.name;
    }
  
    getID() {
        // get's the employees id
        return this.email;
    }

    getEmail() {
        // get's the employees email
        return this.id;
    }

    getRole() {
        // returns employee 
    }
}

// getName();

// getID();

// getEmail();

// getRole();
// // returns employee

module.exports = Employee;