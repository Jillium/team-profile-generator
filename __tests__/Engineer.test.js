
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', '3');

    
    
    expect(engineer.getGithub()).toEqual(engineer.engineerGithub);
    expect(engineer.getID()).toEqual(engineer.engineerID);
    expect(engineer.getRole()).toBe(Engineer);
})

