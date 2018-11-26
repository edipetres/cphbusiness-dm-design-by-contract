
const expect = require('chai').expect;
const Account = require('./Bank')

describe('deposit()', function () {
  
  it('should deposit a positive double number', function () {
    
    // 1. ARRANGE
    const account = new Account(0);
    const depositAmount = 5.25

    // 2. ACT
    const balance = account.deposit(depositAmount);

    // 3. ASSERT
    expect(balance).to.be.equal(depositAmount);

  })

  it('should throw error when depositing a negative number', function () {

    const account = new Account(0);
    const depositAmount = -5.25

    expect(() => account.deposit(depositAmount)).to.throw();
  })

  it('should throw error when not depositing number', function () {

    const account = new Account(0);
    const depositAmount = 'some string'

    expect(() => account.deposit(depositAmount)).to.throw();
  })

});


describe('withdraw()', function () {
  
  it('should withdraw a positive double number', function () {
    
    // 1. ARRANGE
    const initialAmount = 10
    const account = new Account(initialAmount);
    const withdrawalAmount = 9.25

    // 2. ACT
    const balance = account.withdraw(withdrawalAmount);

    // 3. ASSERT
    const expectedBalance = initialAmount - withdrawalAmount
    expect(balance).to.be.equal(expectedBalance);

  })

  it('should throw error when withdrawing excess amount', function () {

    const initialAmount = 10
    const account = new Account(initialAmount);
    const withdrawalAmount = 15

    expect(() => account.withdraw(withdrawalAmount)).to.throw();
  })

  it('should throw error when withdrawing a negative number', function () {

    const initialAmount = 10
    const account = new Account(initialAmount);
    const withdrawalAmount = -5.25

    expect(() => account.withdraw(withdrawalAmount)).to.throw();
  })

  it('should throw error when not withdrawing number', function () {

    const initialAmount = 10
    const account = new Account(initialAmount);
    const withdrawalAmount = 'some string'

    expect(() => account.deposit(withdrawalAmount)).to.throw();
  })

});

describe('transactions', function() {

  it('should proceed when withdrawing the same amount that was deposited', function () {
    const account = new Account(0)
    const depositAmount = 15.25
    const withdrawalAmount = 15.25

    account.deposit(depositAmount)
    const balance = account.withdraw(withdrawalAmount)

    const expectedBalance = depositAmount - withdrawalAmount
    expect(balance).to.be.equal(expectedBalance)
  })

  it('should throw error when withdrawing more that was deposited', function () {
    const account = new Account(0)
    const depositAmount = 15.25
    const withdrawalAmount = 25

    account.deposit(depositAmount)

    expect(() => account.withdraw(withdrawalAmount)).to.throw();
  })
})