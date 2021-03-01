let intergersArray = [2, 3, 2, 5, 8, 2, 3];

function mostOftenNumber(numbersArray) {
  let currentCount = 0;
  let lastCount = 0;
  let mostOftenNumber = 0;

  for (let index in numbersArray) {
    let verifyNumber = numbersArray[index];

    for (let index2 in numbersArray) {
      if (verifyNumber === numbersArray[index2]) {
        if (index !== index2) currentCount += 1;
      }
    }

    if (currentCount > lastCount) {
      lastCount = currentCount;
      mostOftenNumber = numbersArray[index];
    }

    currentCount = 0;
  }

  return mostOftenNumber;
}

console.log(mostOftenNumber(intergersArray));
