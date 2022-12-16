import readlineSync from 'readline-sync'; // import readline-sync
import randomNumbers from '../random_numbers.js'; // import random numbers
import generalGameLogic from '../index.js'; // general game logic from index.js

// rules of game
const rules = 'What is the result of the expression?';

// random const
const singArr = ['+', '-', '*'];
const randArr = Math.floor(Math.random() * singArr.length);
const randomExpressionSign = singArr[randArr];

const randomNumber1 = randomNumbers();
const randomNumber2 = randomNumbers();

const calcGame = () => {
  // calculate
  const calculate = () => {
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
  };

  // task and answer
  const getQuestionAndAnswer = () => {
    const task = (`Question: ${randomNumber1} ${randomExpressionSign} ${randomNumber2}`);
    const correctAnswer = String(calculate);
    return [task, correctAnswer];
  };

  generalGameLogic(rules, getQuestionAndAnswer);
};

export default calcGame;

// переменные которые нужно добавить в играх.
// 1. rules +
// 2. question +
// 3. answerOfUser +
// 4. correctAnswer +
