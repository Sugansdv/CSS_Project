function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person('Dharun', 30);

  Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  };
  
  console.log(person1.greet()); 
  
  const person2 = new Person('Vishwa', 25);
  console.log(person2.greet()); 