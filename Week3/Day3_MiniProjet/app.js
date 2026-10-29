import { catalogItems } from "./data.js";

const shoesContainer = document.getElementById("cards-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
// dialog
const dialog = document.getElementById("my-dialog");
// dialog elements
const closeBtn = document.getElementById("close-icon");
const dialogImage = document.getElementById("dialog-image");
const dialogCategory = document.getElementById("dialog-category");
const dialogMetric = document.getElementById("dialog-metric");
const dialogTitle = document.getElementById("dialog-title");
const dialogDescription = document.getElementById("dialog-description");
const dialogShortDescription = document.getElementById(
  "dialog-short-description",
);

// rendering items
const renderItems = (catalogItems) => {
  shoesContainer.innerHTML = "";
  catalogItems.forEach((item) => {
    const element = `
        <article>
          <img
            src="${item.image}"
            alt="${item.title}"
          />
          <div>
            <h2>${item.title}</h2>
            <p>${item.shortDescription}</p>
          </div>
          <h5>${item.category}</h5>
        </article>
        `;
    shoesContainer.innerHTML += element;
  });

  // add event listener to articles after rendering
  const shoeArticles = document.querySelectorAll("article");
  shoeArticles.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const article = catalogItems.filter(
        (item) =>
          item.title == event.currentTarget.children[1].children[0].textContent,
      );
      // changing modal content
      dialogImage.src = article[0].image;
      dialogTitle.textContent = article[0].title;
      dialogMetric.textContent = article[0].metric;
      dialogCategory.textContent = article[0].category;
      dialogShortDescription.textContent = article[0].shortDescription;
      dialogDescription.textContent = article[0].fullDetails;
      //   show modal
      dialog.showModal();
    });
  });
};

renderItems(catalogItems);
// console.log(dialog.children[0].children[2].children[0].textContent);

// search input event listener
searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  const searchedCatalogItems = [];
  let categoryCatalogItems = [];
  // searching while a category filter is active
  if (categoryFilter.value == 0) {
    // looping through category items
    catalogItems.forEach((item) => {
      const titleLowerCase = item.title.toLowerCase();
      if (titleLowerCase.includes(event.target.value)) {
        searchedCatalogItems.push(item);
      }
    });
  } else if (categoryFilter.value == 1) {
    categoryCatalogItems = catalogItems.filter(
      (item) => item.category.toLowerCase() == "multi shoe",
    );
    // looping through category items
    categoryCatalogItems.forEach((item) => {
      const titleLowerCase = item.title.toLowerCase();
      if (titleLowerCase.includes(event.target.value)) {
        searchedCatalogItems.push(item);
      }
    });
  } else if (categoryFilter.value == 2) {
    categoryCatalogItems = catalogItems.filter(
      (item) => item.category.toLowerCase() == "guard shoe",
    );
    // looping through category items
    categoryCatalogItems.forEach((item) => {
      const titleLowerCase = item.title.toLowerCase();
      if (titleLowerCase.includes(event.target.value)) {
        searchedCatalogItems.push(item);
      }
    });
  } else if (categoryFilter.value == 3) {
    categoryCatalogItems = catalogItems.filter(
      (item) => item.category.toLowerCase() == "forward shoe",
    );
    // looping through category items
    categoryCatalogItems.forEach((item) => {
      const titleLowerCase = item.title.toLowerCase();
      if (titleLowerCase.includes(event.target.value)) {
        searchedCatalogItems.push(item);
      }
    });
  }

  renderItems(searchedCatalogItems);
});

// filtering shoes by select category
categoryFilter.addEventListener("change", (event) => {
  searchInput.value = "";
  let value = "";

  if (event.target.value == 1) {
    value = "multi shoe";
  } else if (event.target.value == 2) {
    value = "guard shoe";
  } else if (event.target.value == 3) {
    value = "forward shoe";
  }

  if (event.target.value != 0) {
    const categoryFilteredItems = catalogItems.filter(
      (item) => item.category.toLowerCase() == value,
    );
    renderItems(categoryFilteredItems);
  } else {
    renderItems(catalogItems);
  }
});

// add event listener to close button for dialog
closeBtn.addEventListener("click", (event) => {
  dialog.close();
});

// close when clicking outside the dialog box
dialog.addEventListener("click", (e) => {
  if (e.target == dialog) {
    dialog.close();
  }
});
