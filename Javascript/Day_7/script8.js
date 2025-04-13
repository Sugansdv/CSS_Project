function Student(name, grades = []) {
    this.name = name;
    this.grades = grades;

    this.calculateAverage = function() {
        if (this.grades.length === 0) {
            console.log(`${this.name} has no grades.`);
            return;
        }
        let total = 0;
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }
        let average = total / this.grades.length;
        console.log(`${this.name}'s average grade is: ${average.toFixed(2)}`);
    };
}

let student1 = new Student('Alice', [90, 85, 88]);
student1.calculateAverage();  

let student2 = new Student('Bob');
student2.grades.push(78, 82, 70);  
student2.calculateAverage();  
