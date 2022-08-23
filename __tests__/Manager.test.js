// Imports and requires Manager class
const Manager = require("../lib/Manager");

// Tests Manager class
describe("Manager class", () => {
  describe("getOfficeNumber, method", () => {
    it("Has name, id, email, office number", () => {
      const result = new Manager("Bob", 2, "test@gmail.com", 4);

      // Tests name, id, email, school
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      expect(result.officeNumber).toBe(4);
      // Tests getName, getId, getEmail and getSchool functions
      expect(result.getName()).toBe("Bob");
      expect(result.getId()).toBe(2);
      expect(result.getEmail()).toBe("test@gmail.com");
      expect(result.getOfficeNumber()).toBe(4);
    });
  });
});
