import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'What is the result of the expression?';

// task and answer
const taskAndAnswer = () => {
  const randomNumber1 = randomNumbers(10);
  const randomNumber2 = randomNumbers(10);

  // random const
  const singArr = ['+', '-', '*'];
  const randArr = Math.floor(Math.random() * singArr.length);
  const randomExpressionSign = singArr[randArr];

  let result = 0;
  switch (randomExpressionSign) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      console.log('error');
  }
  const correctAnswer = String(result);

  const task = `${randomNumber1} ${randomExpressionSign} ${randomNumber2}`;

  return [task, correctAnswer];
};

// export generalGameLogic from index.js
export default () => {
  generalGameLogic(rules, taskAndAnswer);
};
