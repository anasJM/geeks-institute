let allBoldItems = [];

const getBoldItems = () => {
  const boldItems = document.querySelectorAll("strong");
  boldItems.forEach((item) => {
    allBoldItems.push(item);
  });
};

const highlight = () => {
  allBoldItems.forEach((item) => {
    item.style.color = "blue";
  });
};

const returnItemsToDefault = () => {
  allBoldItems.forEach((item) => {
    item.style.color = "black";
  });
};

getBoldItems();

const p = document.querySelector("p");

p.addEventListener("mouseover", () => {
  highlight();
});

p.addEventListener("mouseout", () => {
  returnItemsToDefault();
});
