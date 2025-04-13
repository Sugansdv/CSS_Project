function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  
    this.getDetails = function () {
      return `${this.name} - ${this.position} - ₹${this.salary}`;
    };
  }
  
  function Manager(name, salary, department) {
    Employee.call(this, name, "Manager", salary);
  
    this.department = department;
 
    this.getDetails = function () {
      return `${this.name} - ${this.position} of ${this.department} - ₹${this.salary}`;
    };
  }
 
  const emp1 = new Employee("Dharun", "Developer", 40000);
  const mgr1 = new Manager("Vishwa", 70000, "IT");
  
  console.log(emp1.getDetails()); 
  console.log(mgr1.getDetails()); 
  