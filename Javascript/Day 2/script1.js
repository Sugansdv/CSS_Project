
console.log("---------Mini Project: 1----------");
console.log(" Voting Eligibility System ");
let age = 30;
let citizen = "India";
console.log("Your Age:" + age);
console.log("Citizen of:" + citizen);

if (age >= 18 && citizen === "India") {
    console.log("✅ Eligible to Vote");
} else {
    console.log("❌ Not Eligible to Vote");
}
console.log("");

age = 25;
citizen = "USA";
console.log("Your Age:" + age);
console.log("Citizen of:" + citizen);
if (age >= 18 && citizen === "India") {
    console.log("✅ Eligible to Vote");
} else {
    console.log("❌ Not Eligible to Vote");
}
console.log("");


console.log("---------Mini Project: 2----------");
console.log("Temperature Converter (Weather App)");
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is equal to " + fahrenheit + "°F");

