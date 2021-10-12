class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this.overdraft = overdraft;
  }

  getOverdraft() {
    return this.overdraft;
  }

  setOverdraft(overdraft) {
    this.overdraft = overdraft;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this.overdraft + super._balance) {
      throw Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  toString() {
    return (
      "Checking Account " +
      this._number +
      ": balance " +
      this._balance +
      " overdraft: " +
      this.overdraft
    );
  }

  endOfMonth() {
    if (this._balance < 0) {
      return "Warning balance is : " + this._balance;
    } else {
      return "Balance is fine";
    }
  }
}
