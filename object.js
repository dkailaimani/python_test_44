// Task 1: Constructor function for Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Method to display book information
Book.prototype.displayInfo = function () {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

// Task 3: Array to store book objects and functions to add new books and search
let library = [];

function addBook(title, author, pages) {
    let book = new Book(title, author, pages);
    library.push(book);
}

function searchTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Task 4: Functions to filter books by pages and modify titles and authors
function filterPages() {
    return library.filter(book => book.pages > 100);
}

function changeTitlesAndAuthors() {
    return library.map(book => {
        return {
            "Title": book.title,
            "Author": book.author
        };
    });
}

// Example usage:
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBook("To Kill a Mockingbird", "Harper Lee", 281);
addBook("1984", "George Orwell", 328);

console.log("Filtered by pages:", filterPages());
console.log("Modified titles and authors:", and());
