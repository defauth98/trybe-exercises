let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 9999;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log('Maior valor do array: ', menor);
