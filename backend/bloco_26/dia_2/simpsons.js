const fs = require('fs');

function readFile(filename) {
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}

// function printSimpsonsNames() {
//   const data = readFile('simpsons.json')

//   const persons = JSON.parse(data)

//   persons.forEach(person => console.log(`${person.id} - ${person.name}`))
// }

// printSimpsonsNames()

// function getDataById(id) {
//   const data = readFile('simpsons.json')

//   const persons = JSON.parse(data)

//   persons.forEach(person => {
//     if( person.id === String(id) ) {
//       console.log(person)
//     }
//   })
// }

// getDataById(4)

function deleteSimpsons() {
  const data = readFile('simpsons.json');

  const persons = JSON.parse(data);

  const indexTen = persons.findIndex((person) => person.id === '10');
  const indexSix = persons.findIndex((person) => person.id === '6');

  persons.splice(indexTen, 1);
  persons.splice(indexSix, 1);

  const json = JSON.stringify(persons);

  fs.writeFileSync('simpsons.json', json);
}

deleteSimpsons();
