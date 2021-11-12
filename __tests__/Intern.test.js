const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Bob');

    expect(intern.name).toBe('Bob');
    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
    
})