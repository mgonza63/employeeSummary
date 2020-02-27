const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");

const inquirer = require("inquirer");


const managerQuestions = [
    {
        type: "input",
        name: "manName",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "manID",
        message: "What is your manager's ID?"
    },
    {
        type: "input",
        name: "manEmail",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "manOffice",
        message: "What is your manager's office number?"
    },
    {
        type: "list",
        name: "job",
        message: "Which type of team member would you like to add?",
        choices:["Engineer", "Intern", "I don't want to add any more teammates"]
    },
]
const engineerQuestions = [
    {
        type: "input",
        name: "engName",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engID",
        message: "What is your engineer's ID?"
    },
    {
        type: "input",
        name: "engEmail",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "engGithub",
        message: "What is your engineer Github?"
    },
    {
        type: "list",
        name: "job",
        message: "Which type of team member would you like to add?",
        choices:["Engineer", "Intern", "I don't want to add any more teammates"]
    }
]
const internQuestions = [
    {
        type: "input",
        name: "intName",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "intID",
        message: "What is your intern's ID?"
    },
    {
        type: "input",
        name: "intEmail",
        message: "What is your intern's email?"
    },
    {
        type: "input",
        name: "intSchool",
        message: "What is your intern's school?"
    },
    {
        type: "list",
        name: "job",
        message: "Which type of team member would you like to add?",
        choices:["Engineer", "Intern", "I don't want to add any more teammates"]
    }
]

// {
//     type: "input",
//     name: "",
//     message: ""
// },