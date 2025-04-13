
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
let person1 = new Person("Dharun", 25);
let person2 = new Person("Vishwa", 30);
let person3 = new Person("Santoz", 22);

  
console.log(`Name: ${person1.name}, Age: ${person1.age}`);
console.log(`Name: ${person2.name}, Age: ${person2.age}`);
console.log(`Name: ${person3.name}, Age: ${person3.age}`);
  