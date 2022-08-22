const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("getOfficeNumber, method", () => {
    it("name, id, email, office number", () => {
      const result = new Manager("Bob", 2, "test@gmail.com", 4);
  
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      expect(result.officeNumber).toBe(4);
    });
  });
});
