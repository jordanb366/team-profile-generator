// Imports and requires Intern class
const Intern = require("../lib/Intern");

// Tests intern class
describe("Intern class", () => {
  describe("name, id, email, school", () => {
    it("Has name, id, email, school", () => {
      const result = new Intern("Bob", 2, "test@gmail.com", "University");
      // Tests name, id, email, school
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      expect(result.school).toBe("University");
      // Tests getName, getId, getEmail and getSchool functions
      expect(result.getName()).toBe("Bob");
      expect(result.getId()).toBe(2);
      expect(result.getEmail()).toBe("test@gmail.com");
      expect(result.getSchool()).toBe("University");
    });
  });
});
