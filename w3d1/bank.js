class Bank {
  constructor() {
    this.accounts = [];
    this.nextNumber = 1;
  }

  addAccount() {
    const account = new Account(this.nextNumber);
    this.accounts.push(account);
    this.nextNumber += 1;
    return account.getNumber();
  }

  addSavingsAccount(interest) {
    const savingAccount = new SavingsAccount(this.nextNumber, interest);
    this.accounts.push(savingAccount);
    this.nextNumber += 1;
    return savingAccount.getNumber();
  }

  addCheckingAccount(overdraft) {
    const checkingAccount = new CheckingAccount(this.nextNumber, overdraft);
    this.accounts.push(checkingAccount);
    this.nextNumber += 1;
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
