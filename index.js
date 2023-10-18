console.log(`
Welcome to Janet's professional README generator! 
Follow the prompts to create your very own README markdown file!
`);

// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'input',
                name: 'input_type',
                message: 'What is your name?',
                default: 'I am no one'
            },
            {
                type: 'list',
                name: 'list question',
                message: 'What programming language do you like?',
                choices: ['JavaScript', "C++", "Python"],
                default: 'JavaScript'
            },
            {
                type: 'checkbox',
                name: 'checkbox',
                message: 'How many programming languages do you know?',
                choices: ['JavaScript', "C++", "Python"],
                default: 'JavaScript'
            }
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log("Answers: ", answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(`Prompt couldn't be rendered in the current environment`);
            } else {
            // Something else went wrong
            console.log(`Something else went wrong`);
            }
        })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

