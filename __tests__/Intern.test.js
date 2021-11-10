const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John');

    expect(intern.name).toBe('John');
    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
    
})