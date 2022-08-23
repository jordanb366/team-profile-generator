// Imports and requires Employee class
const Employee = require("./Employee");

// Intern class extends Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // Get school function and get role function
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// Exports Intern class
module.exports = Intern;
