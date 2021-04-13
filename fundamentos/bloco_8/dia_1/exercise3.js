const verifyAnswer = (userAnswer) => (correctAnswer) => userAnswer === correctAnswer;

console.log(verifyAnswer('certo')('certo'));
console.log(verifyAnswer('certo')('errado'));