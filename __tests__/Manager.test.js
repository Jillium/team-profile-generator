const Manager = require('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager('Steve');


    expect(manager.name).toBe('Steve');
    expect(manager.officeNumber).toEqual(expect.any(Number));

})