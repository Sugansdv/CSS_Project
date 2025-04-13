function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  
    this.increaseSalary = function(amount) {
      this.salary += amount;
      console.log(`${this.name}'s salary increased by ₹${amount}. New salary: ₹${this.salary}`);
    };
  }
 
  const employees = [];
  
  function addEmployee(name, position, salary) {
    const emp = new Employee(name, position, salary);
    employees.push(emp);
    console.log(`Employee Added: ${name}`);
    displayEmployees();
  }
  
  function increaseEmployeeSalary(index, amount) {
    if (employees[index]) {
      employees[index].increaseSalary(amount);
      displayEmployees();
    } else {
      console.log("Invalid employee index.");
    }
  }
  
  function displayEmployees() {
    console.log("\nEmployee Records:");
    console.table(employees.map(emp => ({
      Name: emp.name,
      Position: emp.position,
      Salary: emp.salary
    })));
  }

  addEmployee("Santoz", "Developer", 65000);
  addEmployee("Dharun", "Manager", 80000);
  addEmployee("Vishwa", "Tester", 50000);
  
  increaseEmployeeSalary(1, 10000);
  