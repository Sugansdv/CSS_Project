let wheels = parseInt(prompt("Enter the number of wheels:"));
let vehicleType;

switch (wheels) {
    case 2: vehicleType = "Bicycle or Motorcycle"; break;
    case 4: vehicleType = "Car"; break;
    case 6: vehicleType = "Truck"; break;
    default: vehicleType = "Unknown vehicle type";
}
console.log("Number of Wheels : " + wheels);

console.log("Vehicle Type:", vehicleType);