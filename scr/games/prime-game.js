import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// task and answer
const taskAndAnswer = () => {
  // random const
  const randomNumber = randomNumbers(100);

  // task
  const task = `${randomNumber}`;

  // check
  const primeCount = () => {
    const num = randomNumber;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  // answer
  const correctAnswer = primeCount(randomNumber);

  return [task, correctAnswer];
};
// export general game logic from index.js
export default () => {
  generalGameLogic(rules, taskAndAnswer);
};
