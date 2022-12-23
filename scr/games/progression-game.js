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
  return String(arr);
};

// task and answer
const taskAndAnswer = () => {
  // random const
  const start = randomNumbers(90);
  const stepSize = randomNumbers(5);
  const lengthSize = randomNumbers(10);

  // task
  const task = randomArr((start, stepSize, lengthSize));

  // answer
  const missingNumber = String(randomNumbers(90));

  // const correctAnswer
  const correctAnswer = String(missingNumber);
  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(rules, taskAndAnswer);
};
