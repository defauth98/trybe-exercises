const factorial = (number) => {
  let factorialNumber = number;
  let factorial = 1;

  for(let index = 1; index <= factorialNumber; index += 1) {
    factorial = factorial *= index;
  }

  return factorial;
}

console.log(factorial(4));
console.log(factorial(5));