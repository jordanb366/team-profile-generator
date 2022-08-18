const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");


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
        if (data.menu == "Add a Engineer") {
            console.log("Please enter Engineers info...");
            addTheEngineer(data);
        } else if (data.menu == "Add a Intern") {
            console.log("add interns info..");
            addTheIntern(data);
        } else {
            return false;
        }
    });
}

function addTheEngineer() {
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
        name: "menu2",
        message: "Would like to coninue building your team? or are you finished building?",
        choices: ["Add another Engineer", "Add another Intern", "Done"],
    },
    ])
    .then((data) => {
        if (data.menu == "Add a Engineer") {
            console.log("Please enter Engineers info...");
            addTheEngineer();
        } else if (data.menu == "Add a Intern") {
            console.log("add interns info..");
            addTheIntern();
        } else {
            return false;
        }
    });
}

function addTheIntern() {
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
        console.log(data.menu)
        if (data.menu == "Add a Engineer") {
            console.log("Please enter Engineers info...");
            addTheEngineer(data);
        } else if (data.menu == "Add a Intern") {
            console.log("add interns info..");
            addTheIntern(data);
        } else {
            return false;
        }
    });
}


function init() {
    initialPrompt();
}
init();