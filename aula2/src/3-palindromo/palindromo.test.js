const { testaTexto } = require("./palindromo");

test("informar Palindromo", () => {
  expect(testaTexto("àna. ")).toBe(true);
});
test("informar Nao Palindromo", () => {
  expect(testaTexto("Ana Banana")).toBe(false);
});
