const getPeopleMail = ( nomeCompleto ) => {
  const name = nomeCompleto;
  const splitedName = name.trim().split(' ');
  let email = '';

  for(let name in splitedName){
    if(name !== splitedName.length){
      email += `${splitedName[name]}_`
    }
    email += splitedName[name];
  }

  return email;
}

const peopleInfos = ( nomeCompleto) => {
  const email = getPeopleMail(nomeCompleto);

  return {nomeCompleto, email: `${email}@trybe.com`};
}

const newEmployees = () => {
  const employees = {
    id1: peopleInfos('Pedro Guerra'),
    id2: peopleInfos('Luiza Drumond'),
    id3: peopleInfos(' Carla Paiva')
  }
  return employees;
};

const employees = newEmployees();

console.log(employees.id1);
console.log(employees.id2);
console.log(employees.id3);