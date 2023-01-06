/* eslint-disable no-param-reassign */
import randomNumbers from '../helper.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'Find the greatest common divisor of given numbers.';

// check
const getGcd = (number1, number2) => {
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
const getAnswerAndQuestion = () => {
  // random const
  const randomNumber1 = randomNumbers(1, 20);
  const randomNumber2 = randomNumbers(1, 20);

  // task
  const task = `${randomNumber1} ${randomNumber2}`;

  // answer
  const correctAnswer = String(getGcd(randomNumber1, randomNumber2));

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
