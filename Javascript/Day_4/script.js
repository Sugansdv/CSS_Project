let membership = prompt("Enter your membership level (Bronze, Silver, Gold, Platinum):");
let amount = parseFloat(prompt("Enter your purchase amount:"));
let discount;

switch (membership) {
    case "bronze":
        discount = 5;
        break;
    case "silver":
        discount = 10;
        break;
    case "gold":
        discount = 15;
        break;
    case "platinum":
        discount = 20;
        break;
    default:
        discount = 0;
        console.log("No discount applied.");
}

let discountAmount = (amount * discount) / 100;
let finalAmount = amount - discountAmount;

console.log("Original Amount: Rs." + amount.toFixed(2));
console.log("Discount Applied: " + discount + "% - Rs." + discountAmount.toFixed(2));
console.log("Final Amount to pay: Rs." + finalAmount.toFixed(2));
