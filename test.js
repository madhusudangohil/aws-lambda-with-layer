const app = require("./app");
const chai = require("chai");

describe("math test", function() {
  it("test add", async function() {
    let r = await app.handler({ number1: 1, number2: 2 }, null);
    chai.expect(r.statusCode).to.equal(200);
  });
});
