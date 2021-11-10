const Employee = require('../lib/Employee');

test('creates an Employee Object', () => {
    const employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
})