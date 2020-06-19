const Calculator = require("./calculator");
const { expect } = require("chai");

describe("Calculator", () => {
  describe("add", () => {
    let calc;
    beforeEach(() => {
      calc = new Calculator();
    });

    it("should return 1 when passed 1,1", () => {
      expect(calc.add(1, 1)).to.equal(2);
    });
  });
});
