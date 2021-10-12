class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.interest = interest;
  }

  getInterest() {
    return this.interest;
  }

  setInterest(interest) {
    this.interest = interest;
  }

  addInterest() {
    this.deposit((this._balance * this.interest) / 100);
  }

  toString() {
    return "Savings Account " + this._number + ": balance " + this._balance;
  }

  endOfMonth() {
    this.addInterest();
    return "interest added: " + (this._balance * this.interest) / 100;
  }
}
