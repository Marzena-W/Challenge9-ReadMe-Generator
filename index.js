const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("utils");

// array of questions for user
const questions = [ 
    

]; 

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is he title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Add description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Describe installation process.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Add instructions for usage of the app',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What license do you want ot use?',
        name: 'license',
        choices: ["MIT", "GNU", "Open", "Mozilla"]
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
        message: 'Who to do if I have questions about the app?',
        name: 'questions',
      }
    ]);


// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
