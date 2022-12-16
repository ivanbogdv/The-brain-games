#!/usr/scr/env node
import readlineSync from 'readline-sync';

const generalGameLogic = (rules, task) => {
// welcome greetings, user name
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // rules of game
  console.log(rules);

  // game cycle
  for (let i = 1; i <= 3; i += 1) {
  // ask task
    console.log(`Question: ${task}`);
    // user's answer
    const answerOfUser = readlineSync.question('Your answer: ');
  }
  // check answer
  if (correctAnswer === answerOfUser) {
    console.log('Correct!');
  } else {
    console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalGameLogic;

// переменные которые нужно добавить в играх.
// 1. rules
// 2. task
// 3. answerOfUser
// 4. correctAnswer
