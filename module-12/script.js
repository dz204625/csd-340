const favoriteBooksList = [
  "A Wrinkle in Time",
  "The Godfather",
  "Papillion",
  "The Art of Deception",
  "The Hobbit",
  "Do Android Dream of Electric Sheep?",
  "Dune",
  "The Stand",
  "Dies the Fire",
  "The lost King",
];

function displayTopToBottom() {
  displayBooks([...favoriteBooksList]);
}

function displayBottomToTop() {
  displayBooks([...favoriteBooksList].reverse());
}

function displayBooks(bookArray) {
  const listEl = document.getElementById("bookList");
  listEl.innerHTML = "";
  bookArray.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book;
    listEl.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  displayBooks(favoriteBooksList);
});
