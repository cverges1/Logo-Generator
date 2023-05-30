const inquirer = require('inquirer');

const shapes = require('./lib/shapes');

const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three letters for your logo:',
    },
    {
        type: 'input',
        name: 'letterColor',
        message: 'What color would you like the letters? Type a color or enter a hexadecimal number.',
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'What shape would you like the logo to be?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be? Type a color or enter a hexadecimal number.',
    },
];

// TODO: Create a function to write README file
function generateLogo(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err
        }
        console.log('Generated logo.svg')
    })
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            renderLogo('logo.svg', shapes(answers));
        });
};

// Function call to initialize app
init();
