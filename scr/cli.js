import readlineSync from 'readline-sync';

// Wait for user's response.

const askName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};



export default askName;