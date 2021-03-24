const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, value) => {
  let object = obj;
  let objectkey = key;
  let keyValue = value;

  object[objectkey] = keyValue;

  return obj;
}

const showObjectkeys = (obj) => Object.keys(obj);
const showObjectSize = (obj) => Object.keys(obj).length;
const showObjectValues = (obj) => Object.values(obj);

// Referência: Gabarito da Trybe
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getAllStudents = (obj) => {
  let numberOfStudents = 0;
  let array = Object.keys(obj);
  for (let index = 0; index < array.length; index+=1){
    numberOfStudents += obj[array[index]].numeroEstudantes;
  }

  return numberOfStudents;
}

const getValueByNumber = (obj, index) => {
  const array = Object.values(obj);
  return array[index];
}

const verifyPair = (obj, key, value) => {
  let object = obj;
  let objectkey = key;
  let keyValue = value;
  if(object[objectkey] === keyValue){
    return true;
  } 

  return false;
}

// console.log(addTurn(lesson2, 'Turno', 'Manhã'));
// console.log(showObjectkeys(lesson1));
// console.log(showObjectSize(lesson1));
// console.log(showObjectValues(lesson1));
// console.log(allLessons);
// console.log(getAllStudents(allLessons));
// console.log(getValueByNumber(lesson1, 0));
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
