const sum = require("./sum");

describe("sum", () => {
  test("Somar 4 + 5", () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test("Somar 0 + 0", () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test("A funcao somar deve retornar um erro", () => {
    expect(() => {
      sum(3, "4");
    }).toThrow();
  });

  test("A funcao somar deve retornar um erro", () => {
    expect(() => {
      sum(3, "4");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});
