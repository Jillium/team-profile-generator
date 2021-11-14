class Employee {
    constructor(employeeName, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        
        
        

    }

    getName() {
        // get's the employees name
        return this.name;
        
    }
  
    

    getEmail() {
        // get's the employees email
        return this.employeeEmail;
    }

   
}



module.exports = Employee;