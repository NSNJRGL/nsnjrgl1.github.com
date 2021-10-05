var expect = chai.expect;

describe("Map function test", function () {
  it("should equal [ 10, 30, 50, 30, 30 ]", function () {
    expect(b).to.eql([10, 30, 50, 30, 30]);
  });
});

describe("Filter function test", function () {
  it("should equal [ 3,3,3 ]", function () {
    expect(c).to.eql([3, 3, 3]);
  });
});

describe("Reduce function test", function () {
  it("should equal 135", function () {
    expect(d).to.equal(135);
  });
});

describe("Sum function test", function () {
  it("should equal 15", function () {
    expect(sumArr).to.equal(15);
  });
});

describe("Multiply function test", function () {
  it("should equal 135", function () {
    expect(multiplyArr).to.equal(135);
  });
});

describe("Reverse function test", function () {
  it("should equal cba", function () {
    expect(reverseStr).to.equal("cba");
  });
});

describe("FilterLongWords function test", function () {
  it("should equal ['abc']", function () {
    expect(filterWords).to.eql(["abc"]);
  });
});
