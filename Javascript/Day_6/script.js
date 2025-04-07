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

console.log("=================================================");
console.log("JS72. Create an object for a book with properties (title, author, price). ");
let book = {
  title: "Ponniyin Selvan",
  author: "Kalki Krishnamurthy",
  price: 299
};

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Price: ₹" + book.price);
console.log("");

console.log("=================================================");
console.log("JS73. Use Object.keys() to get all book properties. ");
let bookkeys = Object.keys(book);
console.log("Book Properties:", bookkeys);
console.log("");

console.log("=================================================");
console.log("JS74. Use Object.values() to get all book values. ");
let bookvalues = Object.values(book);
console.log("Book Values:", bookvalues);
console.log("");

console.log("=================================================");
console.log("JS75. Add a new property genre to the book object.");
book.genre = "Historical Fiction";
console.log("Updated Book:", book);
console.log("");

console.log("=================================================");
console.log("JS76. Use delete to remove price from the book. ");
delete book.price;
console.log(book);
console.log("");

console.log("=================================================");
console.log("JS77. Merge a publisher object into the book object. ");
let publisher = {
  name: "Vanathi Publishers",
  year: 2003
};
Object.assign(book, publisher);
console.log(book);
console.log("");

console.log("=================================================");
console.log("JS78. Convert the book object into an array of key-value pairs using Object.entries().");
let bookEntries = Object.entries(book);
console.log(bookEntries);
console.log("");