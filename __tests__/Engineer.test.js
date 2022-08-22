const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("name, id, email, gitHub", () => {
    it("name, id, email, gitHub", () => {
      const result = new Engineer("Bob", 2, "test@gmail.com", "jordanb366");
  
      expect(result.name).toBe("Bob");
      expect(result.id).toBe(2);
      expect(result.email).toBe("test@gmail.com");
      expect(result.github).toBe("jordanb366");
    });
  });
});
