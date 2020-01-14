const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerCard = require("./templates/managerCard");
const engineerCard = require("./templates/engineerCard");
const internCard = require("./templates/internCard");
const mainTemplate = require("./templates/main");

let employeeArr = [];
let employeeCardStr = "";

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

function makeCards(arrayObj){
    if(arrayObj === "Manager"){
        newManagerCard = managerCard.generateManagerCardHtml(arrayObj.name, arrayObj.title, arrayObj.id, arrayObj.email,  arrayObj.officeNumber);
        employeeCardStr += newManagerCard;
    } else if (arrayObj === "Engineer"){
        newEngineerCard = engineerCard.generateEngineerCardHtml(arrayObj.name, arrayObj.title, arrayObj.id, arrayObj.email, arrayObj.github);
        employeeCardStr += newEngineerCard;
    } else if (arrayObj === "Intern"){
        newInternCard = internCard.generateInternCardHtml(arrayObj.name, arrayObj.title, arrayObj.id, arrayObj.email, arrayObj.school);
        employeeCardStr += newInternCard;
    }; 
    return employeeCardStr;

}

async function addTeamMember(){
    let addTeamRes = await addTeamMemberInq();
    console.log(addTeamRes); 
    if(addTeamRes.addCard === true){
        let roleSelect = await roleInq();
        console.log(roleSelect);
        if(roleSelect.role === "Engineer"){
            let engineerInqRes = await engineerInq();
            let engineerObj = new Engineer(engineerInqRes.name, engineerInqRes.id, engineerInqRes.email, engineerInqRes.github);
            employeeArr.push(engineerObj);
            addTeamMember();
        } else {
            let internInqRes = await internInq();
            let internObj = new Intern(internInqRes.name, internInqRes.id, internInqRes.email, internInqRes.school);
            employeeArr.push(internObj);
            addTeamMember();
        }
    } else {
        console.log(employeeArr);
        employeeArr.forEach(makeCards);
        let teamHtml = mainTemplate(employeeCardStr);
        console.log(employeeCardStr);
        fs.writeFile("./output/team.html", teamHtml, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    }
}

async function init(){
    let managerRes = await initManagerInq();
    let managerObj = new Manager(managerRes.name, managerRes.id, managerRes.email, managerRes.officeNumber);
    employeeArr.push(managerObj);
    let addTeamRes = await addTeamMember()
}

init();