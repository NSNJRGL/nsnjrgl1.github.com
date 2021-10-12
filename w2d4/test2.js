var Computer = function () {};

Computer.prototype.initialize = function (ram, cpu, storage) {
  this.ram = ram;
  this.cpu = cpu;
  this.storage = storage;
};

Computer.prototype.runProgram = function name(program) {
  console.log("running: " + program);
};

var Laptop = function () {};
Laptop.prototype.initialize = function (battery) {
  this.battery = battery;
};
Laptop.prototype = new Computer();

Laptop.prototype.carryAround = function () {
  console.log(
    "carrying laptop: cpu " +
      this.cpu +
      " ram: " +
      this.ram +
      " storage: " +
      this.storage +
      " battery: " +
      this.battery
  );
};

var me = new Laptop();
me.initialize("4gb", "I7", "SSD", "8Hours");
me.carryAround();
