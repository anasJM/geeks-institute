const form = document.querySelector("#libform");
const spanStory = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffleBtn");
let story;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    form["noun"].value != "" &&
    form["adjective"].value != "" &&
    form["verb"].value != "" &&
    form["person"].value != "" &&
    form["place"].value != ""
  ) {
    let noun = form["noun"].value;
    let adjective = form["adjective"].value;
    let verb = form["verb"].value;
    let person = form["person"].value;
    let place = form["place"].value;

    story = [
      `Yesterday, ${noun} went to the ${place} to buy a ${adjective} ${person}. On the way home, they decided to ${verb} all the way back.`,
      `While visiting ${place}, ${person} tried to ${verb} a giant, ${adjective} ${noun}!`,
      `While exploring a mysterious portal in ${place}, ${person} found a ${adjective} ${noun} that could ${verb}.`,
      `During a wild trip to ${place}, chef ${person} accidentally added a ${adjective} ${noun} to the soup and started to ${verb} uncontrollably.`,
    ];

    spanStory.textContent = story[0];
  }
});

shuffleBtn.addEventListener("click", () => {
  randomIndex = Math.floor(Math.random() * story.length);
  spanStory.textContent = story[randomIndex];
});
