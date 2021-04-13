const checkRaffle = (randomNumber, betNumber) => randomNumber === betNumber ? true : false;

const raffle = (betNumber, checkRaffle) => {
  const randomNumber = Math.ceil(Math.random() * 5);

  if(checkRaffle(randomNumber, betNumber) === true){
    return 'Parabéns você ganhou';
  }

  return 'Tente novamente';
}

console.log(raffle(4, checkRaffle));

console.log(raffle(1, checkRaffle));
