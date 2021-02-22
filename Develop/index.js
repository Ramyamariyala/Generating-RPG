// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type : "input",
    message: "What is your Github username?",
    name: "username",
    validate: (answer) => {
        if(answer.length < 1){
            return console.log("Enter a valid username")
        }
        return true;
    },
}, {
    type : "input",
    message: "What is your email address?",
    name: "email",
    validate: (answer) => {
        if(answer.length < 1){
            return console.log("Enter a email address");
        }
        return true;
    },
}, {
    type: "input",
    message: "What is project's name?",
    name: "title",
    validate: (answer) => {
        if(answer.length < 1){
            return console.log("Enter a valid title");
        }
        return true;
    },
},{
    type: "input",
    message: "What is your user story?",
    name: "userStory",

}, {
    type: "input",
    message: "Write a short description for your project?",
    name: "description"
}, {
    type: "list",
    message: "What is the license used for this project?",
    name: "license",
    choices: ["MIT","APACHE 2.0","MOZILLA","GPL 3.0","None"],
}, {
    type: "input",
    message: "How does the user install the app?",
    name: "installation",
}, {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
},{
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },{
    type: "input",
    message: "How to the user use the project?",
    name: "usage",
  }];

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, function (err) {
        console.log(fileName),
        console.log(answers),
        err ? console.error(err) : console.log("Written to file...");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers));
        console.log(answers);

    });
}

// Function call to initialize app
init();
