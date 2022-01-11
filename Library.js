let myLibrary = [];

// book object definition
function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.info = function(){
        let infoString = `${this.title} by ${this.author},
         ${this.pageCount} pages, ${this.readStatus}`;
    }
};

// create book card and add to library shelf div
function addBookToLibrary() {
    let newBook = document.createElement('div');
    newBook.className = "BookCard";
    newBook.innerText = "newBook";
    document.getElementById('LibraryShelf').append(newBook);

};

// button click causes popup for book object creation

let bookButton = document.getElementById("bookButton");

bookButton.addEventListener("click", addBookToLibrary)

// 