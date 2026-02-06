const testFunctions = require("./main");

test("capitalize 1st character", () => {
  expect(testFunctions.capitalize("developer")).toMatch("Developer");
});

test("reverse a string", () => {
  expect(testFunctions.reverseString("developer")).toMatch("repoleved");
});

test("calculate sum", () => {
  expect(testFunctions.calculator.add(3, 7)).toBe(10);
});
