import inquirer from 'inquirer';
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
async function startGame() {
    const maxScore = 100;
    const randomNumber = getRandomNumber(1, 5);
    let attempts = 0;
    console.log("Welcome to Number Guessing Game!");
    while (true) {
        const { guess } = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Guess a number between 1 and 5:',
            validate: (input) => {
                const num = parseInt(input);
                if (isNaN(num) || num < 1 || num > 5) {
                    return 'Enter a valid number between 1 and 5';
                }
                return true;
            }
        });
        attempts++;
        const guessedNumber = parseInt(guess);
        if (guessedNumber === randomNumber) {
            const score = maxScore - attempts + 1;
            console.log(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts! Your score is ${score}.`);
            break;
        }
        else if (guessedNumber < randomNumber) {
            console.log('Too low! Try again');
        }
        else {
            console.log('Too high! Try again');
        }
    }
}
startGame();
