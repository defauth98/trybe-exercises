const random = require('../src/randomNumber');

jest.mock('../src/randomNumber');

describe('randomNumber', () => {
  it('should have return a random number', () => {
    random.randomNumber = jest.fn().mockReturnValue(10);

    const number = random.randomNumber();

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(number).toBe(10);
  });

  it('should have return a division of two numbers', () => {
    random.randomNumber.mockImplementation((a, b) => a / b);

    const result = random.randomNumber(10, 2);

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(2);
    expect(result).toBe(5);
  });

  it('should have return a multiplication of three numbers', () => {
    random.randomNumber.mockImplementation((a, b, c) => a * b * c);

    const result = random.randomNumber(1, 1, 1);

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(3);
    expect(result).toBe(1);

    random.randomNumber.mockImplementation((a) => a * 2);
  });

  it('should have return a double of a number', () => {
    const result = random.randomNumber(2);

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(4);
    expect(result).toBe(4);

    random.randomNumber.mockImplementation((a) => a * 2);
  });
});
