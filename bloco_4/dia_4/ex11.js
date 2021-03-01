let lastNumberOfSum = 5;

function sumOfNumbers(lastNumber) {
  let sum = 0;

  for (let index = 1; index <= lastNumber; index += 1) {
    sum += index;
  }

  return sum;
}

console.log(sumOfNumbers(lastNumberOfSum));
