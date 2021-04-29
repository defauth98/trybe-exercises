const strings = require('../src/strings');

jest.mock('../src/strings');

describe('strings', () => {
  it('should have return a string in lower case', () => {
    strings.toUpperCase.mockImplementation((string) => string.toLowerCase());

    const string = strings.toUpperCase('BANANA');

    expect(strings.toUpperCase).toHaveBeenCalled();
    expect(strings.toUpperCase).toHaveBeenCalledTimes(1);
    expect(string).toBe('banana');
  });

  it('should have return last letter', () => {
    strings.fistLetter.mockImplementation(
      (string) => string.split('')[string.length - 1]
    );

    const string = strings.fistLetter('banana');

    expect(strings.toUpperCase).toHaveBeenCalled();
    expect(strings.toUpperCase).toHaveBeenCalledTimes(1);
    expect(string).toBe('a');
  });

  it('should concat three strings', () => {
    strings.concat.mockImplementation(
      (string1, string2, string3) => string1 + string2 + string3
    );

    const string = strings.concat('ba', 'na', 'na');

    expect(strings.toUpperCase).toHaveBeenCalled();
    expect(strings.toUpperCase).toHaveBeenCalledTimes(1);
    expect(string).toBe('banana');
  });

  it('should return a string in uppercase', () => {
    strings.toUpperCase.mockImplementation((string) => string.toUpperCase());

    const string = strings.toUpperCase('banana');

    expect(strings.toUpperCase).toHaveBeenCalled();
    expect(strings.toUpperCase).toHaveBeenCalledTimes(2);
    expect(string).toBe('BANANA');
  });
});
