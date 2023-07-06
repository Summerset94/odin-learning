// Here's the library array
let myLibrary = [];

//Book object
function Book(title = "Unknown", author = "Unknown", length = "unknown", year) {
  this._title = title;
  this._author = author;
  this._length = length;
  this._published = year;
  this._status = "Not read yet";
  
  this.switchStatus = function() {
    switch (this._status) {
      case "Not read yet":
        this._status = "Completed";
        break;
      case "Completed":
        this._status = "Not read yet";
        break;
    }
    displayBooks();
  };
}

// set us up some methods.

Book.prototype.setStatus = function(status) {
  this._status = status;
}

Book.prototype.info = function() {
  return `${this._title} by ${this._author}, ${this._length}, ${this._status}.`;
};

Book.prototype.getAuthor = function() {
  return this._author;
};

Book.prototype.getTitle = function() {
  return this._title;
};

Book.prototype.getLength = function() {
  return `${this._length}`;
};

Book.prototype.getStatus = function() {
  return this._status;
};

Book.prototype.getPublished = function() {
  return this._published;
};

//adds a book to the library
function addBookToLibrary(title, author, length, year) {

  myLibrary.push(new Book(title, author, length, year)); 
}

// sorting the library
function sortBy(property) {
  myLibrary.sort((a, b) => a[property].localeCompare(b[property]));
  displayBooks();
};

/* this is copy of sorting function. But in descending order.

function sortBy(property) {
  myLibrary.sort((a, b) => b[property].localeCompare(a[property]));
  displayBooks();
};

*/


//displaying books. Basic. need more advanced code to put this in.
const cardsArea = document.querySelector('.libCards');

function displayBooks() {
  cardsArea.innerHTML = '';
  myLibrary.forEach(((x, index) => {
    let tile = document.createElement("div");
    let uniqueId = `book-${index}`;    
    tile.id = uniqueId;   
    tile.innerHTML = `
      <div class="catTile">${x.getAuthor()}</div>

      <div class="catTile">${x.getTitle()}</div>

      <div class="catTile">Length, pages: ${x.getLength()}</div>

      <div class="catTile">Published: ${x.getPublished()}</div>

      <div class="catTile">Progress: ${x.getStatus()}</div>

      <button class="tileButton" onclick="deleteElementById('book-${index}')">Delete</button>

      <button class="tileButton" onclick="myLibrary[${index}].switchStatus()">
        Switch status
      </button>      
      `
    cardsArea.append(tile);
  }))
};

// Making our buttons do things.
const autorSortBtn = document.querySelector('.js-authorSort');
const titleSortBtn = document.querySelector('.js-titleSort');

autorSortBtn.addEventListener('click', () => {
  sortBy("_author");
});

titleSortBtn.addEventListener('click', () => {
  sortBy("_title");
});

const addNewBook = document.querySelector('.js-addBookBtn');

addNewBook.addEventListener('click', () => {
  let authorHook = document.querySelector('#author');
  let newAuthor = authorHook.value;
  let titleHook = document.querySelector('#title');
  let newTitle = titleHook.value; 
  let lengthHook = document.querySelector('#length');
  let newLength = lengthHook.value;
  let publishedHook = document.querySelector('#dateOfPublish');
let newPublishDate = publishedHook.value;

  addBookToLibrary(newTitle, newAuthor, newLength, newPublishDate);
  displayBooks();

  authorHook.value = '';
  titleHook.value = '';
  lengthHook.value = '';
  publishedHook.value = '';
});

function deleteElementById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const index = parseInt(elementId.split('-')[1]); // Extract the index from the elementId
    myLibrary.splice(index, 1); // Remove the book object from the array
    element.remove(); // Remove the element from the DOM
  }
}


//
document.addEventListener("DOMContentLoaded", () => {
  addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 1937, 310);
  addBookToLibrary("Fear and Loathing in Las Vegas", "Hunter S. Thompson", 1971, 204);
  displayBooks();
});