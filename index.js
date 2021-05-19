const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./generateMarkdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Readme?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information for your project?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter your guidelines for contributing to this project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter instructions to test the application?',
    },
    {
      type: 'list',
      name: 'license',
      choices: ["MIT","Mozilla","Inquirer"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
};

const init = () => {
  promptUser()
    .then((answers) => {
      const readMeContent = generateMarkdown(answers);
      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created a README.md file')
      );
    });
};

init();

