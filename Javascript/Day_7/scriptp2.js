function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
    this.getInfo = function () {
      return `${this.title} - ${this.author} (${this.year})`;
    };
  }
 
  const library = [];
  
  function addBook(title, author, year) {
    const book = new Book(title, author, year);
    library.push(book);
    console.log(`Book Added: ${book.getInfo()}`);
  }
  
  function displayBooks() {
    if (library.length === 0) {
      console.log("No books found in the library");
    } else {
      console.log("\n📘 Book List:");
      console.table(library.map(book => ({
        Title: book.title,
        Author: book.author,
        Year: book.year
      })));
    }
  }
  
  function searchBooks(titleQuery) {
    const results = library.filter(book =>
      book.title.toLowerCase().includes(titleQuery.toLowerCase())
    );
  
    if (results.length === 0) {
      console.log("");
      console.log(`"Book:${titleQuery}" not found.`);
    } else {
        console.log("");        
      console.log(`🔍 Search Results for "${titleQuery}:"`);
      console.log("\n📘 Book Details:");
      console.table(results.map(book => ({
        Title: book.title,
        Author: book.author,
        Year: book.year
      })));
    }
  }
  

  addBook("Ponniyin Selvan", "Kalki", 1950);
  addBook("The 3 Mistakes of My Life", "Chetan Bhagat", 1990);
  addBook("To Kill a Mockingbird", "Harper Lee", 1960);
  addBook("Wings of Fire", "A.P.J. Abdul Kalam", 1999);
  
  displayBooks();
  
  searchBooks("Life");
  searchBooks("Journey");
  searchBooks("Wings"); 
  