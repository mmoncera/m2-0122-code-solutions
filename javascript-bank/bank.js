/* exported Bank */

function Bank(params) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  }
  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);
  this.accounts.push(newAccount);
  this.nextAccountNumber++;
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  var matchingAccount = this.accounts.find(
    account => account.number === number
  );
  if (!matchingAccount) {
    return null;
  }
  return matchingAccount;
};

Bank.prototype.getTotalAssets = function () {
  return this.accounts.reduce(
    (totalAssets, account) => totalAssets + account.getBalance(),
    0
  );
};
