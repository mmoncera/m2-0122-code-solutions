/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  }
  this.transactions.push(new Transaction('deposit', amount));
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  }
  this.transactions.push(new Transaction('withdrawal', amount));
  return true;
};

Account.prototype.getBalance = function () {
  return this.transactions.reduce((sum, { type, amount }) => {
    if (type === 'deposit') {
      return (sum += amount);
    }
    return (sum -= amount);
  }, 0);
};
