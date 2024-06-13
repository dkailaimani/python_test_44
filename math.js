// Task 1: Constructor function for Account object
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: Methods to deposit and withdraw funds
Account.prototype.deposit = function(amount) {
    this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("Insufficient funds.");
    }
};

// Task 3: Method to calculate compound interest
Account.prototype.calculateInterest = function(interestRate) {
    return this.balance * (1 + interestRate);
};

// Example usage:
let userAccount = new Account(123456, 1000, "John Doe");

userAccount.deposit(500);
console.log("Balance after deposit:", userAccount.balance);

userAccount.withdraw(200);
console.log("Balance after withdrawal:", userAccount.balance);

console.log("Balance with interest (at 5%):", userAccount.calculateInterest(0.05));
