const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image:
      "https://www.harpercollins.com/cdn/shop/files/9780063388475_1560x.jpg?v=1791025369",
    alreadyRead: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://m.media-amazon.com/images/I/51wfbHG7f1L._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: false,
  },
];

const BookSection = document.querySelector(".listBooks");
BookSection.style.display = "flex";
BookSection.style.gap = "100px";
BookSection.style.justifyContent = "center";
BookSection.style.padding = "60px 0px";

for (const book of allBooks) {
  const article = document.createElement("article");
  const title = document.createElement("h2");
  const author = document.createElement("h3");
  const img = document.createElement("img");

  img.setAttribute("src", book.image);
  img.setAttribute("alt", book.image);
  img.setAttribute("width", "200px");
  title.textContent = book.title;
  author.textContent = book.author;

  if (book.alreadyRead) {
    title.style.color = "red";
    author.style.color = "red";
  }

  article.append(img, title, author);
  BookSection.appendChild(article);
}
