import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// description of game
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

 // check
 const primeCount = (number) => {
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
  const randomNumber = randomNumbers(0, 100);

  // task
  const task = `${randomNumber}`;

  // answer
  const correctAnswer = primeCount(randomNumber) ? 'yes' : 'no';

  return [task, correctAnswer];
};
// export general game logic from index.js
export default () => {
  generalGameLogic(description, getAnswerAndQuestion);
};
