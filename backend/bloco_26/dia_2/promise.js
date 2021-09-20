function sumThreeNumber(numberOne, numberTwo, numberThree) {
  return new Promise(function (resolve, reject) {
    if(
      typeof numberOne !== 'number' ||
      typeof numberTwo !== 'number' || 
      typeof numberThree !== 'number') {
        reject(Error('Informe apenas números'))
    } 

    total = (numberOne + numberTwo) * numberThree

    if(total < 50) {
      reject(Error('Valor muito baixo'))
    }

    resolve(total)
  })
}

// sumThreeNumber(1,2,'3')
//   .then(sum => console.log(sum))
//   .catch(err => console.log(err.message))

// sumThreeNumber(2,15, 3)
//   .then(sum => console.log(sum))
//   .catch(err => console.log(err.message))

randomNumberOne = Math.floor(Math.random() * 100 + 1)
randomNumberTwo = Math.floor(Math.random() * 100 + 1)
randomNumberThree = Math.floor(Math.random() * 100 + 1)

// sumThreeNumber(randomNumberOne, randomNumberTwo, randomNumberThree)
//   .then(sum => console.log(sum))
//   .catch(err => console.log(err.message))

async function calcSumOfRandomNumbers() {
  try {
    const total = await sumThreeNumber(randomNumberOne, randomNumberTwo, randomNumberThree)
    console.log(total)
  } catch (error) {
    console.log(error.message)
  }
}

calcSumOfRandomNumbers()