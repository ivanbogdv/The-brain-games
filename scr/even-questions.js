import readlineSync from 'readline-sync'; // import readline-sync

const questionAboutEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(`Question: ${randomNumber}`);
    const ansverOfUser = readlineSync.question('Your answer: ');

    const trueAnswerOne = (randomNumber % 2 === 0) && (ansverOfUser === 'yes');
    const trueAnswerTwo = (randomNumber % 2 !== 0) && (ansverOfUser === 'no');

    if (trueAnswerOne === true || trueAnswerTwo === true) {
      console.log('Correct!');
    } else {
      if (ansverOfUser === 'yes') {
        console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      }
      if (ansverOfUser === 'no') {
        console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      }
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default questionAboutEven;
