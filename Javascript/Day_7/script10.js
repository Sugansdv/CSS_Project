function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

function filterBooksByPrice(books, maxPrice) {
    return books.filter(book => book.price <= maxPrice);
}

let book1 = new Book('JavaScript for Beginners', 'John', 250);
let book2 = new Book('Mastering JavaScript', 'Jane', 305);
let book3 = new Book('Advanced JavaScript', 'Alice', 400);
let book4 = new Book('CSS Basics', 'Bob', 105);

let books = [book1, book2, book3, book4];

let affordableBooks = filterBooksByPrice(books, 300);
console.log('==================================');
console.log('Books with price less than Rs.300:');
console.log('==================================\n\n');
affordableBooks.forEach(book => {
    console.log(`${book.title} by ${book.author} - Rs.${book.price}`);
});
