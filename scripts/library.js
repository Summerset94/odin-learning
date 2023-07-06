// Here's the library array
let myLibrary = [];

//Book object
function Book(title, author, length, year) {
  this._title = title;
  this._author = author;
  this._length = length;
  this._published = year;
  this._status = "Not read yet";
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
  return `${this._length} pages`;
};

Book.prototype.getStatus = function() {
  return this._status;
};

Book.prototype.switchStatus = function() {
  switch (this._status) {
    case "Not read yet":
      this._status = "Completed";
      break;
    case "Completed":
      this._status = "Not read yet";
      break;
  }
};

//adds a book to the library
function addBookToLibrary(title, author, length) {

  myLibrary.push(new Book(title, author, length)); 
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
      <div class="authorTile">${x.getAuthor()}</div>
      <div class="titleTile">${x.getTitle()}</div>
      <div class="lengthTile">${x.getLength()}</div>
      <div class="publishedTile">${x._published}</div>
      <div class="statusTile">${x.getStatus()}</div>
      <button onclick="deleteElementById('book-${index}')">Delete</button>
      <button onclick="${x.switchStatus()}">Switch status</button>      
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
});

function deleteElementById(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

// just a tweak that we can't make Year of publishing higher than current year
const yearInput = document.getElementById("dateOfPublish");
const currentYear = new Date().getFullYear();
yearInput.setAttribute("max", currentYear);