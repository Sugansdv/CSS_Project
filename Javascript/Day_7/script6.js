function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Amount: ${amount}, Updated balance: ${this.balance}`);
        } else {
            console.log('Enter valid Amount');
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdraw Amount: ${amount}, Updated balance: ${this.balance}`);
        } else {
            console.log('Insufficient funds for withdrawal.');
        } 
    };

    this.checkBalance = function() {
        console.log(`Account Number: ${this.accountNumber}, Balance: ${this.balance}`);
    };
}

let myAccount = new BankAccount('2865410', 2500);
myAccount.checkBalance();
myAccount.deposit(500);
myAccount.withdraw(100);
myAccount.withdraw(3000);  
