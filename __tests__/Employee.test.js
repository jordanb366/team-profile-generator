const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Employee name", () => {
        it ("There should be an employee name", () => {
            const name = "Bob";
    
            const result = new Employee(name);
            result.getName("Bob");
            expect(result.name).toBe("Bob");
        });
    });
   
});