console.log("==================================================");
console.log("JS66. Create an array of 5 student names. ");
let students = ["Dharun" , "Vishwa", "Mithran", "Jeevith", "Prakalya"]
console.log("Student Names:");
for (let student of students) { 
    console.log(student); 
} 
console.log("");

console.log("========================================================");
console.log("JS67. Add a new student name to the array using push(). ");
students.push("Aadhira")
students.push("Dhanshika")
console.log("Student Names:");
for (let student of students) { 
    console.log(student); 
} 
console.log("");

console.log("==================================================");
console.log("JS68. Remove the last student using pop(). ");
students.pop()
for (let student of students) { 
   console.log(student); 
} 
console.log("");

console.log("==================================================");
console.log("JS69. Use map() to convert all names to uppercase. ");
Ustudents = students.map(name => name.toUpperCase());
for (let student of Ustudents) { 
  console.log(student); 
} 
console.log("");

console.log("============================================================");
console.log("JS70. Use filter() to get students whose names start with A. ");
let Astudents = students.filter(name => name.startsWith("A"));
for (let student of Astudents) { 
    console.log(student); 
  } 
console.log("");

console.log("=================================================");
console.log("JS71. Use forEach() to print each student name. ");
students.forEach(function(student, index) {
    console.log(index + 1 + ". " + student);
});
console.log("");