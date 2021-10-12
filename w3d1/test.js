var expect = chai.expect;

describe("SavingsAccount test", function () {
  it("Savings Account 1: balance 104.55", function () {
    let savingsAccount = new SavingsAccount(1, 2);
    savingsAccount.deposit(102.5);
    savingsAccount.addInterest();
    expect(savingsAccount.toString()).to.equal(
      "Savings Account 1: balance 104.55"
    );
  });
});

describe("CheckingAccount test", function () {
  it("Checking Account 2: balance -900 overdraft: 1000", function () {
    let checkingAccount = new CheckingAccount(2, 1000);
    checkingAccount.deposit(100);
    checkingAccount.withdraw(1000);
    expect(checkingAccount.toString()).to.equal(
      "Checking Account 2: balance -900 overdraft: 1000"
    );
  });
});

describe("Bank test", function () {
  it("Checking Account 2: balance -100 overdraft: 500", function () {
    let bank = new Bank();
    bank.addAccount();
    bank.addCheckingAccount(500);
    bank.addSavingsAccount(10);
    bank.closeAccount(1);

    bank.accounts[0].deposit(200);
    bank.accounts[0].withdraw(300);
    bank.accounts[1].deposit(200);

    expect(bank.accountReport()[0]).to.equal(
      "Checking Account 2: balance -100 overdraft: 500"
    );
    expect(bank.endOfMonth()).to.equal(
      "Warning balance is : -100 interest added: 22"
    );
  });
});
