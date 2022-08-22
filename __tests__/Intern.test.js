const Intern = require("../lib/Intern");

describe("Employee class", () => {
  describe("getSchool, method", () => {
    it("There should be a school name", () => {
      const school = "University of Kansas";

      const result = new Intern("Bob", "1", "email", school);
      result.getSchool(school);
      expect(result.school).toBe(school);
    });
  });
});
