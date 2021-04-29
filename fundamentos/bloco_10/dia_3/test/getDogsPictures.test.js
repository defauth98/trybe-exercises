const getDogs = require('../src/getDogsPictures');

jest.mock('../src/getDogsPictures');

const requestReturn = {
  message: 'request success',
};

const requestReturnErr = {
  message: 'request failed',
};

describe('getDogsPictures', () => {
  it('should have return a dog picture', () => {
    getDogs.getDogsPictures = jest.fn().mockReturnValue(requestReturn);

    expect(getDogs.getDogsPictures()).toEqual({
      message: 'request success',
    });
    expect(getDogs.getDogsPictures).toHaveBeenCalledTimes(1);
    expect(getDogs.getDogsPictures).toHaveBeenCalled();
  });

  it('should have return a error', () => {
    getDogs.getDogsPictures = jest.fn().mockReturnValue(requestReturnErr);

    expect(getDogs.getDogsPictures()).toEqual({
      message: 'request failed',
    });
    expect(getDogs.getDogsPictures).toHaveBeenCalledTimes(1);
    expect(getDogs.getDogsPictures).toHaveBeenCalled();
  });
});
