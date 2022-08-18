const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const { HTMLDoc, ManagerHTML, InternHTML } = require("./src/generateHTMLDoc");



function initialPrompt() {
    inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    },
    {
        type: "list",
        name: "menu",
        message: "Would like to coninue building your team? or are you finished building?",
        choices: ["Add a Engineer", "Add a Intern", "Done"],
    },
    ])
    .then((data) => {
        const ManagerData = new Manager(data.name, data.id, data.email, data.officeNumber);
        ManagerHTML(ManagerData);
        // console.log(data.menu);
        if (data.menu == "Add a Engineer") {
            console.log("Please enter Engineers info...");
            addTheEngineer(ManagerData);
        } else if (data.menu == "Add a Intern") {
            console.log("add interns info..");
            addTheIntern(ManagerData);
        } else {
            fs.writeFile("index.html", HTMLDoc(ManagerData), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
        }
    });
}

function addTheEngineer(ManagerData, EngineerData, InternData) {
    inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's Github?",
    },
    {
        type: "list",
        name: "menu",
        message: "Would like to coninue building your team? or are you finished building?",
        choices: ["Add another Engineer", "Add another Intern", "Done"],
    },
    ])
    .then((data) => {
        const EngineerData = new Engineer(data.name, data.id, data.email, data.github);
        ManagerHTML(ManagerData, EngineerData);
        if (data.menu == "Add another Engineer") {
            console.log("Please enter Engineers info...");
            addTheEngineer(ManagerData, EngineerData, InternData);
        } 
        else if (data.menu == "Add another Intern") {
            console.log("add interns info..");
            addTheIntern(ManagerData, EngineerData, InternData);
        } 
        else {
            fs.writeFile("index.html", HTMLDoc(ManagerData, EngineerData, InternData), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
        }
    });
}

function addTheIntern(ManagerData, EngineerData, InternData) {
    inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "What is your interns Univeristy?",
    },
    {
        type: "list",
        name: "menu",
        message: "Would like to coninue building your team? or are you finished building?",
        choices: ["Add another Engineer", "Add another Intern", "Done"],
    },
    ])
    .then((data) => {
        const InternData = new Intern(data.name, data.id, data.email, data.school);
        ManagerHTML(ManagerData, EngineerData, InternData);
        if (data.menu == "Add another Engineer") {
            console.log("Please enter Engineers info...");
            addTheEngineer(ManagerData, EngineerData, InternData);
        } 
        else if (data.menu == "Add another Intern") {
            console.log("add interns info..");
            addTheIntern(ManagerData, EngineerData, InternData);
        } 
        else {
            fs.writeFile("index.html", HTMLDoc(ManagerData, EngineerData, InternData), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
        }
    });
}


function init() {
    initialPrompt();
}
init();