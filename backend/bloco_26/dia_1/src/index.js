import readlineSync from 'readline-sync';

import calcIMC from './imc.js';
import sorteio from './sorteio.js';
import calcSpeed from './velocidade.js';

const userAnswer = readlineSync.question(`
  Qual script deseja rodar?
  [ 1 ] - imc
  [ 2 ] - sorteio
  [ 3 ] - velocidade
`)

if(userAnswer === '1') {
  calcIMC()
}

if(userAnswer === '2') {
  sorteio()
}

if(userAnswer === '3') {
  calcSpeed()
}