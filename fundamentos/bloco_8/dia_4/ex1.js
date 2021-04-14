const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  const matriz = arrays.reduce((previusValue, NextValue) =>
    previusValue.concat(NextValue)
  );

  return matriz;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
