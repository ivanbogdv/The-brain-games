import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

// task and answer
const taskAndAnswer = () => {
  // random const
  const randomNumber = randomNumbers(20);

  // task
  const task = `${randomNumber}`;

  // answer
  const evenNumber = () => (randomNumber % 2 === 0);
  const correctAnswer = evenNumber(randomNumber) ? 'yes' : 'no';

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(rules, taskAndAnswer);
};
