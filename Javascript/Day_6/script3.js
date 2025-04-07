let students = [
    { name: "Dharun", age: 16, marks: 85 },
    { name: "Vishwa", age: 15, marks: 92 },
    { name: "Arun", age: 17, marks: 78 },
    { name: "Adhik", age: 16, marks: 88 }
  ];
  
  let totalMarks = 0;
  
  console.log("Student Details:\n");
  
  students.forEach(student => {
    console.log(`Name  : ${student.name}`);
    console.log(`Age   : ${student.age}`);
    console.log(`Marks : ${student.marks}\n\n`);
    totalMarks += student.marks;
  });
  
  let averageMarks = totalMarks / students.length;
  
  console.log(`Class Average Marks: ${averageMarks.toFixed(2)}`);