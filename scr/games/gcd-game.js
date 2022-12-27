/* eslint-disable no-param-reassign */
import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'Find the greatest common divisor of given numbers.';

// check
const gcdCount = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};

// task and answer
const taskAndAnswer = () => {
  // random const
  const randomNumber1 = randomNumbers(1, 20);
  const randomNumber2 = randomNumbers(1, 20);

  // task
  const task = `${randomNumber1} ${randomNumber2}`;

  // answer
  const correctAnswer = String(gcdCount(randomNumber1, randomNumber2));

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(rules, taskAndAnswer);
};
