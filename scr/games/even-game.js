import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

// check
const evenNumber = (number) => {
  if (number % 2 === 0) {
  return true;
  } else false;
};

// task and answer
const getAnswerAndQuestion = () => {
  // random const
  const randomNumber = randomNumbers(0, 20);

  // task
  const task = `${randomNumber}`;

  // answer
  const correctAnswer = evenNumber(randomNumber) ? 'yes' : 'no';

  return [task, correctAnswer];
};

// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
