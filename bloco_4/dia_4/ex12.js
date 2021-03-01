function verificaFimPalavra(word, endWord) {
  let splitedWord = word.split('').reverse();
  let splitedEndWord = endWord.split('').reverse();
  let sum = 0;

  for (let index = 0; index < splitedEndWord.length; index += 1) {
    if (splitedWord[index] === splitedEndWord[index]) {
      sum += 1;
    }
  }

  if (sum === endWord.length) {
    return true;
  }

  return false;
}

console.log(verificaFimPalavra('trybe', 'be'));
