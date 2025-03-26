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
console.log(no1, "is", checkEvenOrOdd(no1));
console.log(7, "is", checkEvenOrOdd(7));
console.log("");

console.log("JS16. Write a program that increments a number from 1 to 10 using ++. ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("");

console.log("JS17. Check if a user is eligible to vote using comparison operators. ");
// let age = prompt("Enter your age:");
let age = 30;
console.log("Your age: " + age);
console.log(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");

age = 15;
console.log("Your age: " + age);
console.log(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");
console.log("");

console.log("JS18. Write a program to compare two strings using == and ===. ");
let str1 = "hello";
let str2 = "Hello";
console.log("Using == :", str1 == str2); 
console.log("Using === :", str1 === str2); 
console.log("");

console.log("JS19. Use && to check if a user has a valid email and password. ");
let Uemail = "Sugandv@gmail.com";
let Upassword = "sugan123";
let isEmailValid = Uemail.includes("@") && Uemail.includes(".");
let isPasswordValid = Upassword.length >= 6;
console.log(isEmailValid && isPasswordValid ? "Valid user." : "Invalid email or password.");
console.log("");

console.log("JS20. Write a program to update wallet balance using assignment operators. ");
let walletBalance = 5000;
console.log("Initial Balance:", walletBalance);

let Addamount = 1500;
walletBalance += Addamount;
console.log("Amount Credited:", Addamount);
console.log("Updated Wallet Balance:", walletBalance);

let amountdebit = 800;
walletBalance -= amountdebit;
console.log("Amount Debited:", amountdebit);
console.log("Updated Wallet Balance:", walletBalance);
console.log("");

console.log("JS21. Use a ternary operator to check if a product is available in stock. ");
let stockQuantity = 10;
let isAvailable = stockQuantity > 0;
let message = isAvailable ? "Product is available" : "Out of stock";
console.log(message);

stockQuantity = 0;
isAvailable = stockQuantity > 0;
message = isAvailable ? "Product is available" : "Out of stock";
console.log(message);
console.log("");


console.log("JS22. Create a simple greater than condition to compare two numbers. ");
let num1 = 50;
let num2 = 10;

console.log("Number_1 =", num1);
console.log("Number_2 =", num2);

let resultt = (num1 === num2) 
    ? "Both numbers are equal" 
    : (num1 > num2) 
        ? num1 + " is greater" 
        : num2 + " is greater";

console.log(resultt);

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
console.log((email || phone) && password ? "Login successful" : "Invalid credentials"); 
console.log("");

console.log("JS25. Implement a Buy 1 Get 1 Free condition using if and &&. ");
let itemsBought = 1;
let isEligibleForOffer = itemsBought > 0;
let msg = isEligibleForOffer 
    ? `You bought ${itemsBought} item and got ${itemsBought} free!` 
    : "No offer applied.";
console.log(msg);
console.log("");

console.log("JS26. Check if a year is a leap year using the modulus operator.");
let year = 2025;
let result = (year % 4 === 0 && year % 100 !== 0) 
                || year % 400 === 0 
                ? year + " is a leap year." 
                : year + " is not a leap year.";
console.log(result);

year=2024;
result = (year % 4 === 0 && year % 100 !== 0) 
                || year % 400 === 0 
                ? year + " is a leap year." 
                : year + " is not a leap year.";
console.log(result);




