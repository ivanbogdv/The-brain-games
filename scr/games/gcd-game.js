import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'Find the greatest common divisor of given numbers.';

// GCD count function
const gcdCount = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

// task and answer
const taskAndAnswer = () => {
  // random const
  const randomNumber1 = randomNumbers(10);
  const randomNumber2 = randomNumbers(10);

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
