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
  
  // task
  const task = randomNumbers(2, 60);

  // answer
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};
// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
