function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }
  
  let person1 = new Person("Dharun", 25);
  let person2 = new Person("Vishwa", 30);
  
  console.log(person1.greet());
  console.log("");  
  console.log(person2.greet());
  