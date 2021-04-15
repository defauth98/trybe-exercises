function decode(string) {
  const reference = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let splitStringArray = string.split('');

  for (let index in splitStringArray) {
    splitStringArray[index] = reference[splitStringArray[index]];
  }

  return splitStringArray.join('');
}

module.exports = decode;
