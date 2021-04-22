const getUserName = require('../src/getUserName');

describe('getUserName', () => {
  it('should return name', () => {
    return getUserName('4').then((username) => {
      expect(username).toEqual('Mark');
    });
  });

  it('should return another name', () => {
    return getUserName('5').then((username) => {
      expect(username).toEqual('Paul');
    });
  });

  it('should not return name', () => {
    return getUserName('3').catch((error) => {
      expect(error.error).toEqual('User with 3 not found.');
    });
  });
});
