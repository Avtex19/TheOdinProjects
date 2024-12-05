const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    const libraryDiv = document.getElementById('library');

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('h3');
        title.textContent = book.title;
        bookCard.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookCard.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);

        const readStatus = document.createElement('p');
        readStatus.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookCard.appendChild(readStatus);

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Toggle Read';
        toggleReadBtn.addEventListener('click', () => {
            book.toggleReadStatus();
            displayLibrary();
        });
        bookCard.appendChild(toggleReadBtn);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayLibrary();
        });
        bookCard.appendChild(removeBtn);

        libraryDiv.appendChild(bookCard);
    });
}

const newBookBtn = document.getElementById('new-book-btn');
const bookFormDialog = document.getElementById('book-form-dialog');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-btn');

newBookBtn.addEventListener('click', () => {
    bookFormDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    bookFormDialog.close();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
    bookFormDialog.close();
});

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
