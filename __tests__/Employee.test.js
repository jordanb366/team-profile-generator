// Imports and requires Employee class
const Employee = require("../lib/Employee");

// Tests
describe("Employee class", () => {
  describe("Employee name, ID, and email", () => {
    it("It has Employee's ID, name, and email", () => {
      const result = new Employee("Bob", 2, "test@gmail.com");
      // Tests the name, id, email
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      // Tests the getName, getId, and getEmail functions
      expect(result.getName()).toBe("Bob");
      expect(result.getId()).toBe(2);
      expect(result.getEmail()).toBe("test@gmail.com");
    });
  });
});
