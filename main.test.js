const testFunctions = require("./main");
const caesarCipher = require("./caesar-cipher");

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

test("plaintext encryption", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserving test case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Test Punctuation", () => {
  expect(caesarCipher("(Hello, World!", 3)).toBe("(Khoor, Zruog!");
});

const object = testFunctions.analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(object);

test("Analyze array", () => {
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
