// Imports and requires Engineer class
const Engineer = require("../lib/Engineer");

// Tests engineer class
describe("Engineer class", () => {
  describe("name, id, email, gitHub", () => {
    it("Has name, id, email, gitHub", () => {
      const result = new Engineer("Bob", 2, "test@gmail.com", "jordanb366");
      // Tests name, id, email, github
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      expect(result.github).toBe("jordanb366");
      // Tests getName, getId, getEmail and getGithub functions
      expect(result.getName()).toBe("Bob");
      expect(result.getId()).toBe(2);
      expect(result.getEmail()).toBe("test@gmail.com");
      expect(result.getGithub()).toBe("jordanb366");
    });
  });
});
