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
                name: 'fullName',
                message: 'What is your full name?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is a comprehensive description of your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions for your project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How is this project meant to be used?',
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'What are the contribution guidelines?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What are the testing procedures?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license',
                choices: ["GNU", "MIT", "The Unlicense"],
                default: "MIT"
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github handle?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
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

