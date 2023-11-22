const { checkNumber, getGrade } = require('./conditionals');

const number1 = 10;
const number2 = 5;

console.log('Is number1 greater than number2?', checkNumber(number1, number2));

const score = 85;
const grade = getGrade(score);
console.log('Grade:', grade);