module.exports = class Account {

  constructor(balance) {
    this.balance = balance;
  }

  /*
    Description: 
      Increase the account's balance with the given amount

    Preconditions:
    - amount must be a number (double included)
    - amount must be positive
  */
  deposit(amount) {
    if (isNaN(amount)) {
      throw new Error('Amount must be a number.')
    }
    if (amount <= 0) {
      throw new Error('Amount must be positive.')
    }

    this.balance += amount

    return this.balance
  }

  /*
    Description: 
      Decrease the account's balance with the given amount.
      The balace is left untouched if the amount exceeds the balance.

    Preconditions:
    - amount must be a number (double included)
    - amount must be positive
    - amount must not exceed the balance
  */
  withdraw(amount) {
    if (isNaN(amount)) {
      throw new Error('Amount must be a number.')
    }
    if (amount <= 0) {
      throw new Error('Amount must be positive.')
    }
    if (this.balance - amount < 0) {
      throw new Error('Balance is too low to execute the transaction.')
    }

    this.balance -= amount

    return this.balance
  }

}
