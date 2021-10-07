String.prototype.filter = function (bannedWord) {
  return this.replace(bannedWord + " ", "");
};

Array.prototype.bubbleSort = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (this[j] > this[j + 1]) {
        temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }

  return this;
};

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.learn = function (subject) {
  return this.name + " is now teaching " + subject;
};

var me = new Teacher();
me.initialize("John", 25);

console.log("This house is not nice!".filter("not"));
console.log([6, 4, 0, 3, -2, 1].bubbleSort());
console.log(me.learn("Inheritance"));
