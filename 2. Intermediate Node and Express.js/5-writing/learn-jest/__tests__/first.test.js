const letterCount = require("../"); // same as ../index.js

test("letterCount works with regular strings", () => {
  expect(letterCount("awesome", "e")).toBe(2);
});
