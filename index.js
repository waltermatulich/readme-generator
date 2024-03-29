const path = require("path")
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

// Properties of objects within an array
const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your projects name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project."
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should I use for this project?",
      choices: ["MIT", "APACHE", "GPL", "None"]
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?"
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run test?"
    }
];

// Takes a file name and data as input
// Creates a file path based on the current working directory
//Writes the data to that file

const writeToFile = (fileName, data) => {
    const filePath = path.join(process.cwd(), fileName);
    return fs.writeFileSync(filePath, data);
}

// Generates markdown content base on response

const init = async () => {
    try {
      const inquirerResponses = await inquirer.prompt(questions);
      console.log("Generating README.....");
      const markdownData = generateMarkdown(inquirerResponses);
      writeToFile("Generated_README.md", markdownData);
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };

init();