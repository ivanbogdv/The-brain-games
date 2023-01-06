import randomNumbers from '../helper.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// check
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// task and answer
const getAnswerAndQuestion = () => {
  // random const
  const randomNumber = randomNumbers(0, 80);

  // task
  const task = `${randomNumber}`;

  // answer
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [task, correctAnswer];
};
// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};