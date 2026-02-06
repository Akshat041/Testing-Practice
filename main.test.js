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

test("calculate subtraction", () => {
  expect(testFunctions.calculator.sub(10, 7)).toBe(3);
});

test("calculate division", () => {
  expect(testFunctions.calculator.div(10, 2)).toBe(5);
});

test("calculate multiplication", () => {
  expect(testFunctions.calculator.mul(3, 7)).toBe(21);
});
