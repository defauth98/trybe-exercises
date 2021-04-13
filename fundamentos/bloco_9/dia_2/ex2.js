const promise = new Promise((resolve, reject) => {
  const numbers = [];
  let soma = 0;

  for(let index = 0; index < 10; index += 1){
    numbers[index] = Math.random() * 50;
  }

  numbers.forEach(number => {
    soma += (number * number);
  })

  if(soma < 8000){   
    const item1 = (soma / 2).toFixed(2);
    const item2 = (soma / 3).toFixed(2);
    const item3 = (soma / 5).toFixed(2);
    const item4 = (soma / 10).toFixed(2);
    const numbersArray = [item1, item2, item3, item4];

    resolve(numbersArray);
  } else {
    reject();
  }

})
  .then((numbers) => console.log('Promise resolvida', numbers))
  .catch(() => console.log('Promise rejeitada'))
