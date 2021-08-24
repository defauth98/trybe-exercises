import readlineSync from 'readline-sync';

function calcSpeed() {
  const distancia = readlineSync.questionInt("Digite a distância: ");
  const tempo = readlineSync.questionInt("Digite o tempo: ");
  
  const velocidade =  distancia / tempo;
  
  console.log("A velocidade é igual a " + velocidade);  
}

export default calcSpeed;
