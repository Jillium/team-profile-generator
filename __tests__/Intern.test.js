const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Bob', 'Utah', '12');

    
    expect(intern.getSchool()).toEqual(intern.internSchool);
    expect(intern.getRole()).toBe(Intern);
    expect(intern.getID()).toEqual(intern.internID);
    
})