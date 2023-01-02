import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'What is the result of the expression?';

// check
const calculate = (number1, sign, number2) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      console.log('error');
  }
  return String(result);
};

// task and answer
const getAnswerAndQuestion = () => {
  // random const
  const randomNumber1 = randomNumbers(0, 10);
  const randomNumber2 = randomNumbers(0, 10);

  const singArr = ['+', '-', '*'];
  const randArr = Math.floor(Math.random() * singArr.length);
  const randomExpressionSign = singArr[randArr];

  // task
  const task = `${randomNumber1} ${randomExpressionSign} ${randomNumber2}`;

  // answer
  const correctAnswer = calculate(randomNumber1, randomExpressionSign, randomNumber2);

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
