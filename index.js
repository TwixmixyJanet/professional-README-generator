// ~~~ PACKAGES ~~~ //
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

console.log(`
~~~~~~~~~~ Welcome to Janet's professional README generator! ~~~~~~~~~~
~~~ Follow the prompts to create your very own README markdown file! ~~~
`);

// ~~~ INQUIRER QUESTIONS ~~~ //
const questions = [
      // these questions are called on from the init() function.
      {
        type: "input",
        name: "fullName",
        message: "What is your full name?",
        validate: (fullNameInput) => {
          if (fullNameInput) {
            return true;
          } else {
            console.log("You must enter your name to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("You must enter a title to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "What is a comprehensive description of your project?",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You must enter a description to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
        validate: (installationInput) => {
          if (installationInput) {
            return true;
          } else {
            console.log(
              "You must enter installation instructions to continue."
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "How is this project meant to be used?",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("You must enter usage directions to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?",
        validate: (contributionInput) => {
          if (contributionInput) {
            return true;
          } else {
            console.log("You must enter contribution guidelines to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: "What are the testing procedures?",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("You must enter test procedures to continue.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license",
        choices: ["GPL", "MIT", "Unlicense", "AFL-3.0"],
        default: "MIT",
        validate: (licenseInput) => {
          if (licenseInput) {
            return true;
          } else {
            console.log("You must choose a license to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is your github handle?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("You must enter a github handle to continue.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("You must enter an email to continue.");
            return false;
          }
        },
      }
    ]


// ~~~ fs WRITE file function ~~~ //
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject (err);
        return;
      }
      resolve({
        ok: true,
        message: console.log(`~~~ Success! Your new README is ready in the "dist" folder. ~~~`)
      })
    })

  })
}

// ~~~ init function ready to initiate questions ~~~ //
function init() {
    return inquirer.prompt(questions);
}

// ~~~ init call ~~~ //
// after the init is called then it will return the generate markdown and then it will write it to the file. //
init()
.then(userInput => {
  return generateMarkdown(userInput);
})
.then(readmeInfo => {
  return writeToFile(questions.title, readmeInfo);
})
.catch(err => {
  console.log(err);
})
