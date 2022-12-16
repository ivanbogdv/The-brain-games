import readlineSync from 'readline-sync'; // import readline-sync
import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

const calcGame = () => {
  // rules of game
  const rules = 'What is the result of the expression?';

  const calcTask = () => {
    // random expression sign
    const singArr = ['+', '-', '*'];
    const randArr = Math.floor(Math.random() * singArr.length);
    const randomExpressionSign = singArr[randArr];

    // random numners
    const randomNumber1 = randomNumbers();
    const randomNumber2 = randomNumbers();

    // task to user
    const task = (`Question: ${randomNumber1} ${randomExpressionSign} ${randomNumber2}`);

    // check the aswer
    let result = 0;
    switch (randomExpressionSign) {
      case '+':
        result = randomNumber1 + randomNumber2;
        break;
      case '-':
        result = randomNumber1 - randomNumber2;
        break;
      case '*':
        result = randomNumber1 * randomNumber2;
        break;
      default:
        console.log('error');
    }
    const correctAnswer = String(result);
    return [task, correctAnswer];
  };

  generalGameLogic(rules, calcTask);
};

export default calcGame;

// переменные которые нужно добавить в играх.
// 1. rules +
// 2. task +
// 3. answerOfUser +
// 4. correctAnswer +
