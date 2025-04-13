function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.updateDetails = function(newModel, newYear) {
    this.model = newModel;
    this.year = newYear;
  };

  this.displayDetails = function() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  };
}

let car = new Car("Mahindra", "Bolero", 2018);

console.log("Before Update:");
console.log(car.displayDetails());  
console.log("");

car.updateDetails("Bolero Neo", 2024);

console.log("After Update:");
console.log(car.displayDetails()); 
