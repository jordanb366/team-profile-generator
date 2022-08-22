const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("getOfficeNumber, method", () => {
    it("There should be a school name", () => {
      const officeNumber = "1";

      const result = new Manager("Bob", "1", "email", officeNumber);
      result.getOfficeNumber(officeNumber);
      expect(result.officeNumber).toBe("1");
    });
  });
});
