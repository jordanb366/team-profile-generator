const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("name, id, email, school", () => {
    it("name, id, email, school", () => {
      const result = new Intern("Bob", 2, "test@gmail.com", "University");
  
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      expect(result.school).toBe("University");
    });
  });
});
