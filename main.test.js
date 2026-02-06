const testFunctions = require("./main");

test("capitalize 1st character", () => {
  expect(testFunctions.capitalize("developer")).toMatch("Developer");
});

test("reverse a string", () => {
  expect(testFunctions.reverseString("developer")).toMatch("repoleved");
});
