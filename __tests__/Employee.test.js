const Employee = require('../lib/Employee');

test('creates an Employee Object', () => {
    const employee = new Employee('Bob');

    expect(employee.employeeName).toBe('Bob');
    expect(employee.getEmail()).toEqual(employee.employeeEmail);
    
})
