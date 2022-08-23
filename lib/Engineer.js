// Imports and requires Employee class
const Employee = require("./Employee");

// Engineer class and extend employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Gets github and getrole functions
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// Exports engineer class
module.exports = Engineer;
