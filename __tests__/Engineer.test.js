const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("getGithub, method", () => {
    it("There should be a Github username", () => {
      const github = "jordanb366";

      const result = new Engineer("Bob", "1", "email", github);
      result.getGithub;
      expect(result.getGithub()).toBe("jordanb366");
    });
  });
});
