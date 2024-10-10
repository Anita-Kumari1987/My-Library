myLibrary=[];

function Book(title,author,pages,status){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBooksToLibrary(book){
  myLibrary.push(book);
  displayBooks();
}

function displayBooks(){
  const bookDiv = document.getElementById('books');
  bookDiv.innerHTML='';
  myLibrary.forEach((book,index) => {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.innerHTML=
    `<h3>Title: ${book.title}</h3><p><stronge> 
    Author:</stronge>${book.author}</p>
    <p><stronge> Pages:</stronge>${book.pages}</p>
    <p><stronge> Status:</stronge>${book.status}</p>
    <button onclick = "toggleReadStatus(${index});">
    Read/Unread</button>
    <button onclick = "removeBook(${index});">
    Remove book</button>`;
    bookDiv.appendChild(bookCard);
  });
}

function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayBooks();
}

Book.prototype.toggleRead = function() {
  if(this.status === 'Read'){
    this.status = 'Not Read';
  } else {
    this.status = 'Read';
  }
};

function removeBook(index){
  myLibrary.splice(index,1);
  displayBooks();
}
const newBookBtn = document.getElementById('newBookButton');
const newBookModal = document.getElementById('newBookModal');
const closeModalBtn = document.getElementById('closeModal');

newBookBtn.addEventListener('click', () => {
  newBookModal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  newBookModal.close();
});


const newBookForm= document.getElementById('book_form');
newBookForm.addEventListener('submit',function(event){
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pageCount').value;
  const status = document.getElementById('status').value;

  const newBook = new Book(title,author,pages,status);
  addBooksToLibrary(newBook);

  newBookModal.close();
  newBookForm.reset();
});



