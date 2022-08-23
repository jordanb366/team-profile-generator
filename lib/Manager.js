// Imports and requires employee class
const Employee = require("./Employee");

// Manager class extends Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Get officenumber function and getRole function
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

// Exports manager
module.exports = Manager;
