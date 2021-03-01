const numbersArray = [2, 4, 6, 7, 10, 0, -3];

function checkHighestValue(array) {
  let lowestValue = 9999;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < lowestValue) {
      lowestValue = array[index];
    }
  }

  return array.indexOf(lowestValue);
}

console.log(checkHighestValue(numbersArray));
