function BankAccount(accountNumber = 'Unknown', balance = 0) {
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

let myAccount1 = new BankAccount();  
myAccount1.checkBalance();
console.log("");

let myAccount2 = new BankAccount('255426', 1000);  
myAccount2.checkBalance();
