const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Employee name, ID, and email", () => {
    it("Employee's ID", () => {
      const result = new Employee("Bob", 2, "test@gmail.com");
  
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
    });
  });
  
});
