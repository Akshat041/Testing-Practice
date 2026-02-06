const capitalize = require("./main");

test("capitalize 1st character", () => {
  expect(capitalize("developer")).toMatch("Developer");
});
