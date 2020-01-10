const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

let name = null;
let role = null;
let id = null;
let email = null;
let employeeArr = [];

async function initManagerInq() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?"
        }
    ])
}

async function addTeamMemberInq() {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addCard",
            message: "Would you like to add a new team member?"
        },
    ])
}

async function roleInq() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: [
                "Engineer",
                "Intern",

            ]
        }
    ])
}

async function engineerInq() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the employee's github username?"
        }
    ])
}

async function internInq() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the employee attend?"
        }
    ])
}

async function addTeamMember(){
    let addTeamRes = await addTeamMemberInq();
    if(addTeamRes === "Y"){
        let roleSelect = await roleInq();
        if(roleSelect === "Engineer"){
            let engineerInqRes = await engineerInq();
            employeeArr.push(engineerInqRes);
            addTeamMember();
        } else {
            let internInqRes = await internInq();
            employeeArr.push(internInqRes);
            addTeamMember();
        }
    } else {
        return employeeArr
    }
}

async function init(){
    let managerResponse = await initManagerInq();
    employeeArr.push(managerResponse);
    console.log(employeeArr);
    let addTeamRes = await addTeamMember()
    console.log(addTeamRes);
}

init();