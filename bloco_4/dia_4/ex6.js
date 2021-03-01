// Link para stack overflow: https://pt.stackoverflow.com/questions/315456/fun%C3%A7%C3%A3o-para-checar-pal%C3%ADndromo
// Essa funcão checar se a palavra ao contrário é igual
function isPalindrome(word) {
  if (word === word.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }

  // return false;
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));
