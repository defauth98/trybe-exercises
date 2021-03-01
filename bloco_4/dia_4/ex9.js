let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function showHighestName(namesArray) {
  let highestName = '';

  for (let index = 0; index < namesArray.length; index += 1) {
    if (namesArray[index].length > highestName.length) {
      highestName = namesArray[index];
    }
  }

  return highestName;
}

console.log(showHighestName(names));
