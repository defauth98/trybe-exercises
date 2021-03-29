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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getStudentsMath = (obj) => {
  const object = obj;
  const array = Object.keys(obj);
  let total = 0;

  for(let index = 0; index < array.length; index += 1){
    if(object[array[index]].materia === 'Matemática'){
      total += object[array[index]].numeroEstudantes;
    }
  }

  return total;
}

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));

console.log(getStudentsMath(allLessons));