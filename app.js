const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const fs = require("fs");
const inquirer = require("inquirer");


// {
//     type: "input",
//     name: "",
//     message: ""
// },


const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter manager name:",

    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email:",

    },
    {
        type: "input",
        name: "officeNum",
        message: "Enter office number:",

    },
    {
        type: "list",
        name: "addTeam",
        message: "Do you have any team members?",
        choices: ["Yes", "No"]
    }
]

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter employee name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter their email:",

    },
    {
        type: "list",
        name: "role",
        message: "What is their role?",
        choices: ["engineer", "intern"]
    },
    {
        when: input => {
            return input.role == "engineer"
        },
        type: "input",
        name: "github",
        message: "Engineer, enter your github username:",

    },
    {
        when: input => {
            return input.role == "intern"
        },
        type: "input",
        name: "school",
        message: "Intern, enter your school name:",
    },
    {
        type: "list",
        name: "addTeam",
        message: "Add another team member?",
        choices: ["Yes", "No"]
    }
]
function promptEmployee () {
    inquirer.prompt(employeeQuestions).then(employeeAnswers => {
        if (employeeAnswers.addTeam === "Yes") {
            promptEmployee();
        } else {
            return
        };
    });
    

} 

function init() {
    inquirer.prompt(managerQuestions).then(managerAnswers => {
        if (managerAnswers.addTeam === "Yes") {
            promptEmployee();
        } else {
            return
        };

    });

};

init()