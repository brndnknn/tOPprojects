let myLibrary = [];

// book object definition
function Book(){
    this.title = form.title.value;
    this.author = form.author.value;
    this.pageCount = form.pageCount.value;
    this.readStatus = form.readStatus.checked;
    
};

// define book card creation from book object
function createCard() {
    let newCard = document.createElement('div');
    newCard.className = "BookCard";
    let title = document.createElement('h3');
    title.className = 'title';
    newCard.append(title);
    let author = document.createElement('h3');
    author.className = 'author';
    newCard.append(author);
    let pageCount = document.createElement('h3');
    pageCount.className = 'pageCount';
    newCard.append(pageCount);
    let readStatus = document.createElement('button');
    readStatus.className = 'readStatus';
    newCard.append(readStatus);
    newCard.append(document.createElement("br"));
    let remove = document.createElement('button');
    remove.className = 'removeButton';
    remove.innerText = "Remove";
    newCard.append(remove);

    return newCard;
};

function changeEntry() {
    switch( event.target.classList[0] ) {
        case 'readStatus':
            changeStatus(this);
            break;
        case 'removeButton':
            removeEntry(this);
            break;
        default:
            break;
    }
}

function removeEntry(entry) {
    console.log('remove');
    console.log(entry);
    let bookIndex = entry.getAttribute('data-lib-index');
    entry.remove();
    myLibrary.splice(bookIndex, 1);
    let bookCards = document.querySelectorAll('.BookCard');
    bookCards.forEach(element => {
        let libIndex = element.getAttribute('data-lib-index');
        if(libIndex >= bookIndex)
        {
            element.setAttribute('data-lib-index', libIndex-1);
        }
    });
}

function changeStatus(entry) {
    let bookIndex = entry.getAttribute('data-lib-index');
    let readStatusButton = entry.querySelector('.readStatus');
    if(myLibrary[bookIndex].readStatus == true ){
        myLibrary[bookIndex].readStatus = false;
        readStatusButton.innerText = 'Not-Read';
    }else{
        myLibrary[bookIndex].readStatus = true;
        readStatusButton.innerText = 'Read';
    }
   
}

function displayCard( Book ) {
    let newCard = createCard();
    newCard.setAttribute('data-lib-index', myLibrary.length);
    newCard.querySelector('.title').textContent = "Title: " + Book.title;
    newCard.querySelector('.author').textContent = "Author: " + Book.author;
    newCard.querySelector('.pageCount').textContent = "Page Count: " + Book.pageCount;
    let readStatus = Book.readStatus ? 'Read' : "Not-Read";
    let readButton = newCard.querySelector('.readStatus');
    readButton.textContent = readStatus;
    newCard.addEventListener('click', changeEntry);
  
    return newCard;
}


// define DOM variables

let newBookForm = document.getElementById('newBookForm');
let bookButton = document.getElementById("addBookButton");
let formButton = document.getElementById('bookButton');
let formTextElements = document.querySelectorAll('.formText');



// create book card and add to library and shelf div
function hideForm() {
    
    newBookForm.style.display = 'none';
    
};

function clearForm() {
    formTextElements.forEach(element => {
        element.value = '';
    });
    form.readStatus.checked = false;
    
};

function createBookObject() {
    let newBook = new Book();
    LibraryShelf.append(displayCard(newBook));
    myLibrary.push(newBook);
    
}

function addBook() {
    hideForm();
    createBookObject();
    clearForm();
};


function displayForm() {
    newBookForm.style.display = 'flex';
};

// button click causes popup for book object creation

bookButton.addEventListener("click", addBook);
formButton.addEventListener("click", displayForm);



