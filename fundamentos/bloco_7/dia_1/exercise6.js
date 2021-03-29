let skillsArray = ['javascript', 'typescript', 'react', 'node', 'html'];

const helloTryber = (tryberName) => {
  let name = tryberName;

  return `Tryber ${name} aqui!`;
}

const concatSkills = (string) => {
  let setence = `${string} Minhas cinco principais habilidades são:`
  for(let index = 0; index < skillsArray.length; index+=1){
    setence += ` ${skillsArray[index]}`;
  }

  return setence;
}

console.log(concatSkills(helloTryber('Daniel')));