function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.displayDetails = function() {
      return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };

    this.getAge = function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    };
  }
  
  let car1 = new Car("Toyota", "Innova", 2020);
  let car2 = new Car("Mahindra", "XUV 700", 2024);
  
  console.log(car1.displayDetails());
  console.log(`Age: ${car1.getAge()} years`);
  console.log("");  
  console.log(car2.displayDetails());
  console.log(`Age: ${car2.getAge()} years`);
  