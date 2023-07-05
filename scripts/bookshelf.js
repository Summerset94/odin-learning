'use strict';

function bookCard(title, author, length) {
  this._title = title;
  this._author = author;
  this._length = length;
  this._status = "not read yet";
  
}

bookCard.prototype.info = function() {
  return `${this._title} by ${this._author}, ${this._length}, ${this._status}.`;
  };

bookCard.prototype.setStatus = function(status) {
  this._status = status;
}

const theHobbit = new bookCard("The Hobbit", "J.R.R. Tolkien", "295 pages");


