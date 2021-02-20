// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type = "input",
    message: "What is your Github username?",
    name: "userName",
    validate: (answer) => {
        if(answer.length < 1){
            return console.log("Enter a valid username")
        }
        return true;
    },
}, {
    type = "input",
    message: "What is your email address?",
    name: "Email"
}, {
    type = "input",
    message: "What is project's name?",
    name: "Title"
}, {
    type = "input",
    message: "Write a short despription for your project?",
    name: "Despription"
}, {
    type = "input",
    message: "What is the license used for this project?",
    name: "License"
}, {
    type = "input",
    message: "How does the user install the app?",
    name: "Installation"
}];

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,function(err){
        console.log(fileName),
        console.log(data),
        err ? console.error(err) : console.log("Written to file...");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md",generateMarkdown(data));
        console.log(data);

    });
}

// Function call to initialize app
init();
