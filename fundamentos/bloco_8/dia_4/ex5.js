const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  const numberOfA = names.reduce((acc, current) => {
    const convertedName = current.toLowerCase();
    const splitedName = convertedName.split('');

    for (let index in splitedName) {
      if (splitedName[index] === 'a') {
        acc += 1;
      }
    }

    return acc;
  }, 0);

  return numberOfA;
}

assert.deepStrictEqual(containsA(), 20);
