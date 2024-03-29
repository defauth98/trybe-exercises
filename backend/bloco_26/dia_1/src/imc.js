import readlineSync from 'readline-sync';

function calcIMC() {
  const peso = readlineSync.questionFloat("Digite seu peso: ");
  const altura = readlineSync.questionFloat("Digite sua altura: ");
  
  const imc =  peso / (altura * altura);
  
  console.log(`Seu IMC é igual a ${imc}`);
  
  console.log(`
  | IMC                                       | Situação                  |
  | ----------------------------------------- | ------------------------- |
  | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
  | Entre 18,5 e 24,9                         | Peso normal               |
  | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
  | Entre 30,0 e 34,9                         | Obesidade grau I          |
  | Entre 35,0 e 39,9                         | Obesidade grau II         |
  | 40,0 e acima                              | Obesidade graus III e IV  |
  `)
}

export default calcIMC;
