console.log("==================================================");
console.log("JS53. Create a function that prints Hello, World!.");
function print() { 
    console.log("Hello, World!"); 
} 
print()
console.log("");

console.log("=================================================================");
console.log("JS54. Write a function that takes a number and returns its cube. ");
function cube(number) { 
    return number * number * number;
}

console.log("Cube of 3 is " + cube(3));  
console.log("Cube of 4 is " + cube(4));
console.log("");

console.log("============================================================");
console.log("JS55. Write a function to check if a number is even or odd. ");
function isEvenOrOdd(num) { 
    console.log(num + " is a " + (num % 2 === 0 ? "Even" : "Odd") + " number"); 
} 

isEvenOrOdd(5); 
console.log("");

console.log("==========================================================");
console.log("JS56. Write a function to find the factorial of a number. ");
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i; 
      }
    return result;
}

console.log("The factorial of 4 is " + factorial(4)); 
console.log("The factorial of 5 is " + factorial(5));
console.log("");

console.log("==========================================================");
console.log("JS57. Create a function to return the sum of two numbers. ");
function sum(a, b) {
    return a + b;
}

console.log("sum of (3, 5)" + " is " + sum(3, 5)); 
console.log("sum of (10, 20)" + " is" + sum(10, 20)); 
console.log("");

console.log("==================================================================");
console.log("JS58. Write a function that returns the largest of three numbers. ");
function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log("From the numbers 10, 25, 15 : " + "\n \n " + findLargest(10, 25, 15) + " is a largest number");
console.log("");

console.log("================================================================");
console.log("JS59. Write a function that checks if a string is a palindrome. ");
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        console.log(str + " is a palindrome.");
    } else {
        console.log(str + " is not a palindrome.");
    }
}

isPalindrome("madam"); 
isPalindrome("hello"); 
console.log("");

console.log("==========================================================");
console.log("JS60. Create a function to convert Celsius to Fahrenheit. ");
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C" + " is equal to " + fahrenheit + "°F.");
}
celsiusToFahrenheit(0); 
celsiusToFahrenheit(100);
console.log("");

console.log("=========================================================");
console.log("JS61. Write a function to calculate the simple interest. ");
function calculateSimpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    console.log("Principal Amount" + " : " + "Rs." + principal)
    console.log("Rate of Interest" + " : " + rate + "%")
    console.log("Time Period" + " : " + time + " years")
    console.log("Simple Interest" + " : " + "Rs." + interest)
}
calculateSimpleInterest(1000, 5, 2);
console.log("");

console.log("=======================================================");
console.log("JS62. Create a function that reverses an array. ");
function reversearray(arr) {
    let reversed = arr.reverse();
    console.log("Reversed array: " + reversed);
}
reversearray([1, 2, 3, 4, 5]);
console.log("");

console.log("=====================================================================");
console.log("JS63. Write a function that counts the number of vowels in a string. ");
function countvowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    console.log("Number of vowels in " + str + " : " + count);
}
countvowels("// Today was a good day //");
countvowels("// Aeroplane //");
console.log("");

console.log("====================================================================");
console.log("JS64. Write an arrow function that doubles each number in an array. ");
let doublesno = array => array.map(num => num * 2);

let givenarray = [1, 2, 3, 4, 5];
let doubled = doublesno(givenarray);
console.log("Given Array:", givenarray.join(', '));
console.log("Doubled Array:", doubled.join(', '));
console.log("");

console.log("===========================================================");
console.log("JS65. Create a function that takes a callback and calls it.");
function execute(number, callback) {
    callback(number); 
}

function square(number) {
    console.log("Square of " + number + " is " + (number * number));
}

execute(5, square); 
console.log("");


