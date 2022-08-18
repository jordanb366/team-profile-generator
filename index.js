const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");



inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your Employee's name?",
    },
    {
        type: "list",
        name: "employeetype",
        message: "Choose your employee's position",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee ID number?",
    },
    {
        type: "input",
        name: "linkedin",
        message: "What is your LinkedIn URL?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub URL?",
    },
    ])
    .then((response) => {

        const HTMLDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${response.name}'s Portfolio</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body class="container bg-dark">
<section class="bg-primary">
    <h1>${response.name}'s Portfolio</h1>
    <h2>Bio:</h2>
    <p>I am from... ${response.location} ${response.bio}</p>
</section>
<section class="bg-light">
    <ul>
        <li>LinkedIn: ${response.linkedin}</li>
        <li>GitHub: ${response.github}</li>
    </ul>
</section>
  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`;

        fs.writeFile("index.html", HTMLDoc, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
    })