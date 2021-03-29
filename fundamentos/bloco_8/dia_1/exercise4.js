const checkAnwser = (studentAnswer, templateAnswer) => studentAnswer === templateAnswer ? true : false;

const test = (templateArray, studentAnswers, checkAnwer) => {
  const studentAnswers = studentAnswers;
  const templateAnswers = templateArray;
  const pointsCounter = 0;

  for (let index = 0; index < studentAnswers.length; index++) {
    if(checkAnwser(studentAnswers[index], templateAnswers[index]) === true){
      pointsCounter += 1;
    } 
    else if(studentAnswers[index] === 'N.A'){
      pointsCounter += 0;
    }
    else {
      pointsCounter -= 0.5;
    }
  }

  return pointsCounter;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];