console.log("========================================================");
console.log("JS40. Print numbers from 1 to 10 using a for loop.");
let num;
for (num=1; num<=10; num++)
{
    console.log(num);
    
}
console.log("");

console.log("========================================================");
console.log("JS41. Print even numbers from 2 to 20 using a for loop. ");
for (num=2; num<=20; num+=2)
    {
        console.log(num);
        
    }
    console.log("");

    console.log("========================================================");
console.log("JS42. Print numbers from 10 to 1 using a while loop.");
let number=10;
while (number>=1){
    console.log(number);
    number--;
}
console.log("");

console.log("========================================================");
console.log("JS.43 Print Hello World! 5 times using a do-while loop. ");
let count= 1;
do{
    console.log(count, "Hello World!");
    count++;    
} while(count<=5)
console.log("");

console.log("==========================================================================");
console.log("JS44. Iterate over an array and print each element using a for...of loop. ");
let skills = ["CSS", "HTML", "JavaScript", "Python", "SQL"];
count = 1;
for (let skill of skills){
    console.log(count +"." + skill);
    count++;
}
console.log("");

console.log("========================================================");
console.log("JS45. Iterate over an object and print its properties using a for...in loop. ");
let person = {
    name: "Suganya",
    city: "Madurai",
    profession: "Trainee"
};

for (let key in person){
    console.log(key + ": " + person[key])
}
console.log("");

console.log("========================================================");
console.log("JS46. Sum numbers from 1 to 10 using a for loop. ");
 let sum=0;
for(num=1; num<=10; num++)
{
    sum += num;
}
console.log("Sum numbers from 1 to 10 : " + sum);

console.log("");

console.log("========================================================");
console.log("JS47. Find the first number greater than 50 in an array using break. ");
let numbers = [7, 14, 21, 28, 35, 42, 49, 54, 63, 70];
console.log("Numbers in the array: " + numbers);
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    result = numbers[i];
    break;
  }
}
console.log("First number greater than 50 : " + result);
console.log("");

console.log("========================================================");
console.log("JS48. Skip printing numbers divisible by 3 using continue. ");
for (let i=1; i<=30; i++) {
    if(i % 3 == 0){
        continue;
    }
    console.log(i);
    
}
console.log("");

console.log("========================================================");
console.log("JS49. Create a multiplication table for 5 using a for loop. ");
let n = prompt("Enter a number for the multiplication table:");
for(i=1; i<=10; i++){
    console.log(n + "*" + i + "=" +n*i);
    
}
console.log("");

console.log("========================================================");
console.log("JS50. Reverse a string using a loop. ");
let str = "suganya"; 
let reversed = ""; 
for (let i = str.length - 1; i >= 0; i--) { 
    reversed += str[i];
}
console.log("Entered string:" + str);

console.log("Reversed string:" + reversed); 
console.log("");

console.log("========================================================");
console.log("JS51. Count the number of vowels in a string using a loop. ");
let string = "Today was a good day";  
count = 0; 
let vowels = "aeiou"; 

for (let i = 0; i < string.length; i++) { 
    if (vowels.includes(string[i])) { 
        count++; 
    }
}
console.log(string);
console.log("Number of vowels:", count);
console.log("");

console.log("========================================================");
console.log("JS52. Find the largest number in an array using a loop.");
number = [15, 23, 99, 78, 100, 81];  
let max = number[0]; 
console.log("Numbers in the array: " + number);
for (let i = 1; i < number.length; i++) {  
    if (number[i] > max) {  
        max = number[i]; 
    }  
}

console.log("Largest number:", max);


