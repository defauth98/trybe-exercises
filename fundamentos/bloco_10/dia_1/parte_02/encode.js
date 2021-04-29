function encode(string) {
  const reference = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let splitStringArray = string.split('');

  for (let index in splitStringArray) {
    if (reference[splitStringArray[index]])
      splitStringArray[index] = reference[splitStringArray[index]];
    splitStringArray[index] = splitStringArray[index];
  }

  return splitStringArray.join('');
}

module.exports = encode;
