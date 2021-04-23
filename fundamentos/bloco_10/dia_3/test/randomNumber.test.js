const random = require('../src/randomNumber');

describe('randomNumber', () => {
  it('should have return a random number', () => {
    random.randomNumber = jest.fn().mockReturnValue(10);

    const number = random.randomNumber();

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(number).toBe(10);
  });
});
