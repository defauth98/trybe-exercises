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

  it('should return name with async/await', async () => {
    const name = await getUserName('4');

    expect(name).toEqual('Mark');
  });

  it('should return another name with async/await', async () => {
    const name = await getUserName('5');

    expect(name).toEqual('Paul');
  });

  it('should return another name with async/await', async () => {
    try {
      await getUserName('3');
    } catch (err) {
      expect(err.error).toEqual('User with 3 not found.');
    }
  });
});
