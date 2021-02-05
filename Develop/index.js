// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your installation instructions here',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your usage information here',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines here',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter your test instructions here',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license for your application',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>{
            writeToFile('README.md', generateMarkdown(data))
        })
}

// Function call to initialize app
init();
