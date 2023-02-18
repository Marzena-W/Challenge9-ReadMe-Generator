const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is he title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write a description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Describe the installation process.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Add instructions for usage of the app',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What license do you want ot use?',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Who are the contributors?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Is there a test added?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Who to do if I have a questions about the app?',
    name: 'questions',
  }
]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(data => {
    console.log(data)
    writeToFile("README.md", generateMarkdown(data))
  }) 
}

// function call to initialize program
init();
