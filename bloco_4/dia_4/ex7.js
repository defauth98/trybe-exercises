const numbersArray = [2, 3, 6, 7, 10, 1];

function checkHighestValue(array) {
  let highestValue = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestValue) {
      highestValue = array[index];
    }
  }

  return array.indexOf(highestValue);
}

console.log(checkHighestValue(numbersArray));
