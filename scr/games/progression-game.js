import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'What number is missing in the progression?';

// random arrey
const randomArr = (startNumber, step, length) => {
  const arr = [];
  let number = startNumber;

  for (let i = 0; i < length; i += 1) {
    arr.push(number);
    number += step;
  }
  return arr;
};

// task and answer
const taskAndAnswer = () => {
  // random const
  const startNumber = randomNumbers(0, 100);
  const step = randomNumbers(0, 5);
  const length = 10;

  const arrNumbers = randomArr(startNumber, step, length);
  const skipNumber = randomNumbers(0, arrNumbers.length);

  // const correctAnswer
  const correctAnswer = String(arrNumbers[skipNumber]);
  arrNumbers[skipNumber] = '..';

  // task
  const task = arrNumbers.join(' ');

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(rules, taskAndAnswer);
};
