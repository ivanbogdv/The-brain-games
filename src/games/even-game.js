import randomNumbers from '../helper.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

// check
const isEven = (number) => number % 2 === 0;

// task and answer
const getAnswerAndQuestion = () => {
  // random const
  const randomNumber = randomNumbers(0, 30);

  // task
  const task = `${randomNumber}`;

  // answer
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
