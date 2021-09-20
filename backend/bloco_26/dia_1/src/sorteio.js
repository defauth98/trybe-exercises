import readlineSync from 'readline-sync';

function sorteio() {
  while(1) {
    const randomNumber = Math.floor(Math.random() * 10);
  
    const number = readlineSync.questionInt("Adivinhe o número: ");
  
    if(number === randomNumber) {
      console.log("Parabéns, número correto!")
    } 
  
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  
    const userAnswer = readlineSync.question("Deseja jogar novamente? (s ou n): ");
  
    if(userAnswer === 'n') {
      break;
    }
  }
}

export default sorteio;