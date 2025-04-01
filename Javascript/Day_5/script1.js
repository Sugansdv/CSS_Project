function calculategrade() {
    while (true) {
        let name = prompt("Enter Student Name (or type 'exit' to stop):");
        if (name === "exit") break; 

        let subjects = ["Tamil", "English", "Maths", "EVS", "Computer"];
        let marks = [];
        let total = 0;

        for (let i = 0; i < subjects.length; i++) {
            let mark = parseFloat(prompt("Enter marks for " + subjects[i] + ":"));
            marks.push(mark);
            total += mark;
        }

        let average = total / subjects.length;

        let grade;
        if (average >= 90) {
            grade = "A";
        } else if (average >= 75 && average <= 89){
            grade = "B";
        } else if (average >= 50 && average < 75) {
            grade = "C";
        } else {
            grade = "F";
        }

        console.log("----------------------------------- \n");
        console.log("\n Student Name: " + name);
        console.log("Marks");
        for (let i = 0; i < subjects.length; i++) {
            console.log(subjects[i] + ": " + marks[i]);
        }
        console.log("Total Marks: " + total);
        console.log("Average Marks: " + average);
        console.log("Grade: " + grade);
    }
}

calculategrade();
