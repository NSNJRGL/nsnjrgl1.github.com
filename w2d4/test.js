var expect = chai.expect;

describe("Filter function test", function () {
  it("This house is nice!", function () {
    expect("This house is not nice!".filter("not")).to.equal(
      "This house is nice!"
    );
  });
});

describe("Bubble sort function test", function () {
  it("[ -2, 0, 1, 3, 4, 6 ]", function () {
    expect([6, 4, 0, 3, -2, 1].bubbleSort()).to.eql([-2, 0, 1, 3, 4, 6]);
  });
});

describe("Teacher inheritence test", function () {
  it("John is now teaching Inheritance", function () {
    var me = new Teacher();

    me.initialize("John", 25);
    expect(me.learn("Inheritance")).to.equal(
      "John is now teaching Inheritance"
    );
  });
});
