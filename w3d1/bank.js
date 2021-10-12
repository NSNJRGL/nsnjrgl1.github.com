class Bank {
  static nextNumber = 1;

  constructor() {
    this.accounts = [];
  }

  addAccount() {
    const account = new Account(Bank.nextNumber);
    this.accounts.push(account);
    Bank.nextNumber += 1;
    return account.getNumber();
  }

  addSavingsAccount(interest) {
    const savingAccount = new SavingsAccount(Bank.nextNumber, interest);
    this.accounts.push(savingAccount);
    Bank.nextNumber += 1;
    return savingAccount.getNumber();
  }

  addCheckingAccount(overdraft) {
    const checkingAccount = new CheckingAccount(Bank.nextNumber, overdraft);
    this.accounts.push(checkingAccount);
    Bank.nextNumber += 1;
    return checkingAccount.getNumber();
  }

  closeAccount(number) {
    this.accounts = this.accounts.filter(
      (account) => account.getNumber() !== number
    );
  }

  accountReport() {
    return this.accounts.map((account) => account.toString());
  }

  endOfMonth() {
    return this.accounts.reduce(
      (prev, account) =>
        (account = prev.endOfMonth() + " " + account.endOfMonth())
    );
  }
}
