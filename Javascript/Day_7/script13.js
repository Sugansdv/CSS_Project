function Address(city, state) {
    this.city = city;
    this.state = state;
  }
  
  function Person(name, city, state) {
    this.name = name;
    this.address = new Address(city, state); 
    this.getInfo = function () {
      return `${this.name} lives in ${this.address.city}, ${this.address.state}`;
    };
  }
  
  const person1 = new Person("Dharun", "Madurai", "Tamil Nadu");
  console.log(person1.getInfo());
  
  console.log(person1); 