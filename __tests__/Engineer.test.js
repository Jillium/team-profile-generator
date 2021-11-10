const { getNodeSourceCodeLocation } = require('parse5/lib/tree-adapters/default');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob');

    expect(engineer.name).toBe('Bob');
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));

})

