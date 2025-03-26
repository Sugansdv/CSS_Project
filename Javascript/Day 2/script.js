console.log("JS14. Write a program that calculates the total price of 3 products. ");
let product1 = 50.75;
let product2 = 30.25;
let product3 = 20.00;
let totalPrice = product1 + product2 + product3;
console.log("Total Price: $" + totalPrice.toFixed(2));
console.log("");

console.log("JS15. Create a script that checks if a number is even or odd using the modulus operator. ");
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
let no1 = 10;
let no2 = 7;
console.log(no1, "is", checkEvenOrOdd(no1)); 
console.log(no2, "is", checkEvenOrOdd(no2)); 
console.log("");

console.log("JS16. Write a program that increments a number from 1 to 10 using ++. ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("");

console.log("JS17. Check if a user is eligible to vote using comparison operators. ");
// let age = prompt("Enter your age:");
let age= 30;
function checkVotingEligibility(age) {
    console.log("Your age : " + age);
    
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
checkVotingEligibility(age) 
console.log("");

console.log("JS18. Write a program to compare two strings using == and ===. ");
let str1 = "hello";
let str2 = "Hello";
console.log("Using == :", str1 == str2); 
console.log("Using === :", str1 === str2); 
console.log("");

console.log("JS19. Use && to check if a user has a valid email and password. ");
let userEmail = "Sugandv@gmail.com";
let userPassword = "sugan123";
let usermail = "sugandv"
let userpass = "sugan123"
function isValidUser(email, password) {
    let isEmailValid = email.includes("@") && email.includes(".");
    let isPasswordValid = password.length >= 6;     
    if (isEmailValid && isPasswordValid) {
        console.log("Valid user.");
    } else {
        console.log("Invalid email or password.");
    }
}
isValidUser(userEmail, userPassword);
console.log("");
isValidUser(usermail, userpass);
console.log("");

console.log("JS20. Write a program to update wallet balance using assignment operators. ");
let walletBalance = 5000;
console.log("Initial Balance:" + walletBalance);

function updateWalletBalance(balance, amount, operation) {
    if (operation === "add") {
        balance += amount;
        console.log("Amount Credited:", amount);
    } else {
        balance -= amount;
        console.log("Amount Debited:", amount);
    }
    console.log("Updated Wallet Balance:", balance);
}
updateWalletBalance(walletBalance, 1500, "add");
updateWalletBalance(walletBalance, 800, "subtract");

console.log("");

console.log("JS21. Use a ternary operator to check if a product is available in stock. ");
function checkStock(quantity) {
    let isAvailable = quantity > 0;
    let message = isAvailable ? "Product is available" : "Out of stock";
    console.log(message);
}
let stockQuantity = 10;
console.log("Stock_Quantity: " + stockQuantity);
checkStock(stockQuantity);

stockQuantity = 0;
console.log("Stock_Quantity: " + stockQuantity);
checkStock(stockQuantity);
console.log("");

console.log("JS22. Create a simple greater than condition to compare two numbers. ");
let num1 = 50;
let num2 = 10;
console.log("Number_1=", num1);
console.log("Number_2=", num2);

if (num1 === num2) {
    console.log("Both numbers are equal");
} else {
    let result = num1 > num2 ? num1 + " is greater" : num2 + " is greater";
    console.log(result);
}
console.log("");


console.log("JS23. Write a JavaScript program to apply discounts if a cart total exceeds $50. ");
let cartTotal = 120; 
let discount = cartTotal > 50 ? cartTotal * 0.1 : 0;  
let finalPrice = cartTotal - discount;  
console.log("Cart Total: $" + cartTotal); 
console.log("Discount Applied: $" + discount); 
console.log("Final Price to Pay: $" + finalPrice); 
console.log("");

console.log("JS24. Use || to allow login using email or phone number. ");
let email = "sugandv@gmail.com";
let phone = "";
let password = "sugan123";

if ((email || phone) && password) {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}
console.log("");

console.log("JS25. Implement a Buy 1 Get 1 Free condition using if and &&. ");
let itemsBought = 1;
let isEligibleForOffer = itemsBought >= 1;

if (itemsBought > 0 && isEligibleForOffer) {
    let freeItems = itemsBought;
    console.log("You bought", itemsBought, "item and got", freeItems, "free!");
} else {
    console.log("No offer applied.");
}console.log("");

console.log("JS26. Check if a year is a leap year using the modulus operator.");
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

isLeapYear(2025);
isLeapYear(2024);


