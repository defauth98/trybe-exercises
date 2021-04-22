const uppercase = require('../src/uppercase');

describe('uppercase', () => {
  it('should have call a function callback', () => {
    uppercase('banana', (string) => {
      expect(string).toEqual('BANANA');
    });
  });

  it('should have return a string in uppercase', () => {
    uppercase('call', (string) => {
      expect(string).toEqual('CALL');
    });
  });
});
