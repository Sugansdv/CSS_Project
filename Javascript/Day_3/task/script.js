

console.log("========================================================================");
console.log("JS28. Use if-else to check if a person is an adult. ");
let age = 18;
console.log("Age = " + age);
if (age >= 18)
{
     console.log("Person is an Adult");
}
else
    {
         console.log("Person is Not an Adult");
    }

console.log("");
age = 8;
console.log("Age = " + age);
if (age >= 18)
{
     console.log("Person is an Adult");
}
else
    {
         console.log("Person is Not an Adult");
    }
console.log("");



console.log("========================================================================");
console.log("JS30. Use if-else if-else to check grade categories.");
let marks = 85; 
console.log("Mark : " + marks);

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else if (marks >= 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F (Fail)");
}
console.log("");

console.log("========================================================================");
console.log("JS31. Check if a person is eligible for a driver's license.");
let age1=17;
console.log("Age : " + age1);
if (age1 >= 18) {
    console.log("✅ Eligible for a driver's license.");
} else {
    console.log("❌ Not eligible for a driver's license.");
}
console.log("");

age1=20;
console.log("Age : " + age1)
if (age1 >= 18) {
    console.log("✅ Eligible for a driver's license.");
} else {
    console.log("❌ Not eligible for a driver's license.");
}
console.log("");

console.log("========================================================================");
console.log("JS32. Create a nested if condition to check both login and admin status.");
let isLogin = true;  
let isAdmin = true;     

if (isLogin) {
    if (isAdmin) {
        console.log("Welcome, Admin!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("❌ Please log in to continue.");
}
console.log("");

console.log("========================================================================");
console.log("JS33. Use a switch statement to print messages for different days. ");
let day = 'Sunday';
console.log("Day : " + day);


switch(day) {
    case 'Monday':
        console.log("Start of the week! Let's get to work.");
        break;
    case 'Tuesday':
        console.log("Keep going! You're doing great.");
        break;
    case 'Wednesday':
        console.log("Halfway through the week!");
        break;
    case 'Thursday':
        console.log("Almost there, hang in there!");
        break;
    case 'Friday':
        console.log("It's Friday! The weekend is near.");
        break;
    case 'Saturday':
        console.log("Enjoy your weekend!");
        break;
    case 'Sunday':
        console.log("Rest and recharge for the week ahead.");
        break;
    default:
        console.log("Invalid day. Please enter a valid day of the week.");
}
console.log("");

console.log("========================================================================");
console.log("JS34. Use a ternary operator to check if a person is eligible for a senior citizen discount. ");
let age2 = 65;
console.log("Age : " + age2);

let discountEligibility = age2 >= 60 ? "✅ Eligible for senior citizen discount" : "❌ Not eligible for senior citizen discount";
console.log(discountEligibility);
console.log("");

age2 = 45;
console.log("Age : " + age2);

discountEligibility = age2 >= 60 ? "✅ Eligible for senior citizen discount" : "❌ Not eligible for senior citizen discount";
console.log(discountEligibility);
console.log("");

console.log("========================================================================");
console.log("JS35. Check if a user is logged in using &&. ");
let username = "Dharun"; 

if (username && username.length > 0) {
    console.log("✅ User is logged in");
} else {
    console.log("❌ User is not logged in");
}
console.log("");

console.log("========================================================================");
console.log("JS36. Use || to check if a username or email is provided. ");
let username1 = "";  
let email1 = "sugandv@gmail.com";

if (username1 || email1) {
    console.log("✅ Username or Email provided");
} else {
    console.log("❌ Please enter username or email");
}
console.log("");

console.log("========================================================================");
console.log("JS37. Use ! to negate a boolean variable. ");
let isRaining = false;
console.log(!isRaining);
console.log("");

console.log("========================================================================");
console.log("JS38. Check if the current year is a leap year. ");
let year = new Date().getFullYear();

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
console.log("");

console.log("========================================================================");
console.log("JS39. Validate a password length using an if statement. ");
let password = "suganyasdv123"; 

if (password.length >= 8) {
    console.log("✅ Password is valid.");
} else {
    console.log("❌ Password must be at least 8 characters long.");
}
console.log("");

password = "sugan23"; 

if (password.length >= 8) {
    console.log("✅ Password is valid.");
} else {
    console.log("❌ Password must be at least 8 characters long.");
}
console.log("");
