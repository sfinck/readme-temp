# readme-temp
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This application is a read me template that allows the user to enter information about their project through a series of prompted questions: 
1. What is your project title?
2. Describe your project
3. Enter your installation instructions here 
4. Enter your usage information here 
5. Enter your contribution guidelines here 
6. Enter your test instructions here 
7. Choose a license for your application 
8. Enter your git hub user name
9. Enter your email address 
Using the writeToFile method in the npm fs package the user input is used to write a read me file. Once the file is written, it is formatted through a generate markdown file. The purpose of this application is to allow the user to create a high quality read me.  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation 
1. [JavaScript] 
2. [Node](https://nodejs.org/en/)
3. [Inquirer package](https://www.npmjs.com/package/inquirer)
4. [fs](https://www.npmjs.com/package/fs)
5. [Screencastify](https://www.screencastify.com/)

## Usage 
The application will be invoked by using the following command:

```bash
node index.js
```
### User Story: 
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## License 
[MIT](https://opensource.org/licenses/MIT)