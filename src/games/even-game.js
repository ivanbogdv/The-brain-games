import randomNumbers from '../helper.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

// check
const isEven = (number) => number % 2 === 0;

// task and answer
const getAnswerAndQuestion = () => {
  // task
  const task = randomNumbers(2, 30);

  // answer
  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
