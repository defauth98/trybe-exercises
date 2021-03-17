let number1 = 5;
let number2 = 2;
let number3 = 21;

if (number1 > number2 && number1 > number3 && number2 < number3) {
  console.log('O maior numero eh: ', number1);
} else if (number2 > number1 && number2 > number3 && number1 < number3) {
  console.log('O maior numero eh: ', number2);
} else {
  console.log('O maior numero eh: ', number3);
}
