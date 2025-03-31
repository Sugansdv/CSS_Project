let num = prompt("Enter a number for the multiplication table:");

console.log("=================================");
console.log("Multiplication Table for " + num + " :");
console.log("=================================");

for(i=1; i<=10; i++){
    console.log(num + "*" + i + "=" +num*i);
    
}
console.log("");