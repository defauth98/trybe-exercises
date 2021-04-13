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
    resolve();
  } else {
    reject();
  }

})
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'))
