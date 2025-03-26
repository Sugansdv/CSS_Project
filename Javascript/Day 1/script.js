console.log("Task no: JS1")
console.log("hello, Javascript!\n")
console.log("");

console.log("Task no: JS2")
var Name="Dharun";
let native='Madurai';
const age= 20;
console.log(Name)
console.log(native)
console.log(age)
console.log("");

console.log("Task no: JS3")
function testScope() {
    if (true) {
        // var has function scope
        var num1 = 10;
        var square= num1 * num1;
        
        // let has block scope
        let num = 50;
        
        // const has block scope
        const price = 2000;
        
        console.log("Inside block:");
        console.log("Square:",square);  
        console.log("num=", num); 
        console.log("Price:", price); 
    }
    
    console.log("Outside block:");
    console.log(num1);  
    
    // console.log(num);  // Error 
    // console.log(price); // Error 
}
testScope();
console.log("");

console.log("Task no: JS4")
// String
let str = "Suganya";
console.log("Type:", typeof str); 

// Number
let num = 25;
console.log("Type:", typeof num); 

// Boolean
let isJavaScriptFun = true;
console.log("Type:", typeof isJavaScriptFun); 

// Undefined
let notDefined;
console.log("Type:", typeof notDefined); 

// Null
let emptyValue = null;
console.log("Type:", typeof emptyValue); 

// Object
let person = { name: "Dharun", age: 20 };
console.log("Type:", typeof person); 

// Array 
let numbers = [1, 2, 3, 4, 5];
console.log("Type:", typeof numbers); 

// Function
function greet() {
    return "Hello!";
}
console.log("Type:", typeof greet); 

// BigInt
let bigNumber = 12345678901234567890n;
console.log("Type:", typeof bigNumber); 

// Symbol
let uniqueId = Symbol("id");
console.log("Type:", typeof uniqueId); 
console.log("");

console.log("Task no: JS5")
const userProfile = {
    name: "Dharun",
    age: 20,
    isStudent: true
};
console.log("userProfile");
console.log("Name:", userProfile.name);
console.log("Age:", userProfile.age);
console.log("isStudent:", userProfile.isStudent);
console.log("");

console.log("Task no: JS6")
let favoriteColors = ["Red", "Green", "Blue", "orange", "Purple"];
console.log("Favorite Colors:", favoriteColors);
console.log("List of Favorite Colors:");
favoriteColors.forEach(function(color, index) {
    console.log((index + 1) + ". " + color);
});
console.log("");

console.log("Task no: JS7")
console.log("Convert a String to a Number")
var number1 ="100"
console.log("Type:", typeof number1); 
var number2 = Number(number1);
console.log("Type:", typeof number2); 

console.log("Convert a Number to a String")
var number3 =100
console.log("Type:", typeof number3); 
var number4 = String(number3);
console.log("Type:", typeof number4); 
console.log("");

console.log("Task no: JS8")
function isEven(number) {
    return number % 2 === 0; 
}
console.log(isEven(10)); 
console.log(isEven(5)); 
console.log("");

console.log("Task no: JS9")
var a; 
var b = null;
console.log(a);
console.log(b);
console.log("Type:", typeof a); 
console.log("Type:", typeof b); 
console.log("");

console.log("Task no: JS10")
const id1 = Symbol("sugan");
const id2 = Symbol("sugan"); 
console.log(id1 == id2); 
console.log(id1);
console.log(id2);
console.log("");

console.log("Task no: JS11")
const bigNum = 1234567890123456789012345678901234567890n; 
console.log(bigNum);        
console.log(typeof bigNum); 
console.log("");

console.log("Task no: JS12")
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
let no1=10;
let no2=7;
console.log(no1 , " is " , checkEvenOrOdd(no1)); 
console.log(no2 , " is " , checkEvenOrOdd(no2)); 
console.log("");

console.log("Task no: JS13")
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is equal to " + fahrenheit + "°F");
