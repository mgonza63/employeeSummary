const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const htmlRenderer = require("./lib/htmlRenderer");

const fs = require("fs");
const inquirer = require("inquirer");


// {
//     type: "input",
//     name: "",
//     message: ""
// },

let teamMembers = [];

function createTeam() {

    inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Do you want to add another employee?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Create Team!"
                ]
            }
        ]).then(res => {

            switch (res.memberChoice) {

                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "Create Team!":
                    htmlRenderer(teamMembers);
                    break

            }
        })


    function addManager() {
        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "managerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "managerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "managerEmail"
                },

                {
                    type: "input",
                    message: "What is your office number?",
                    name: "managerOfficeNumber"
                }

            ]).then(res => {
                

                const manager = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerOfficeNumber)

                teamMembers.push(manager)

                createTeam();

            })


    }


    function addEngineer() {
        inquirer.prompt([
                {
                    type: "input",
                    message: "What is your engineer's first name?",
                    name: "engineerName"
                },

                {
                    type: "input",
                    message: "What is your engineer's ID?",
                    name: "engineerID"
                },

                {
                    type: "input",
                    message: "What is your engineer's email?",
                    name: "engineerEmail"
                },

                {
                    type: "input",
                    message: "What is your engineer's GitHub username?",
                    name: "gitHubUsername"
                }
            ]).then(res => {
                

                const engineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.gitHubUsername)

                teamMembers.push(engineer)

                createTeam();

            })
    }

    function addIntern() {
        inquirer.prompt([
                {
                    type: "input",
                    message: "What is your intern's first name?",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "What is your intern's employee ID?",
                    name: "internID"
                },
                {
                    type: "input",
                    message: "What is your intern's email?",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "What is your intern's school?",
                    name: "internSchool"
                }
             
        ]).then(res => {
            

            const intern = new Intern(res.internName, res.internID, res.internEmail, res.internSchool)

            teamMembers.push(intern)

            createTeam();
        })
    }
}

module.exports = teamMembers

createTeam();