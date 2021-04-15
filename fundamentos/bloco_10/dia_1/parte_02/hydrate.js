function hydrate(drinks) {
  let numbers = drinks.match(/\d+/g);
  let sum = 0;

  for (let num in numbers) {
    sum += parseInt(numbers[num]);
  }

  if (sum === 1) {
    return '1 copo de água';
  }

  return `${sum} copos de água`;
}

module.exports = hydrate;
