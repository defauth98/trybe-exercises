const longestWord = (phrase) => {
  let highestWord = '';
  let words = phrase.split(' ');

  for(let index = 0; index < words.length;index+=1){
    if(words[index].length > highestWord.length){
      highestWord = words[index];
    }
  }

  return highestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));