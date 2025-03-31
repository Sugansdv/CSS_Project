console.log("=========================");
console.log("Sum of Digits of a Number");
console.log("=========================");

let num = prompt("Enter a positive number:"); 
let number = num;
let sum = 0; 

while (num > 0) {  
    sum += num % 10; 
    num = Math.floor(num / 10);
}
console.log("\n Entered number: ", number);
console.log("\n Sum of digits:", sum);
