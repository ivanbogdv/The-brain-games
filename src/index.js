#!/usr/src/env node
import readlineSync from 'readline-sync';

const generalGameLogic = (description, getAnswerAndQuestion) => {
// welcome greetings, user name
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // description of game
  console.log(description);

  // game cycle
  for (let i = 1; i <= 3; i += 1) {
    const [task, correctAnswer] = getAnswerAndQuestion();
    console.log(`Question: ${task}`);

    // user's answer
    const answerOfUser = readlineSync.question('Your answer: ');

    // check answer
    if (correctAnswer === answerOfUser) {
      console.log('Correct!');
    } else {
      console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalGameLogic;
