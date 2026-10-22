const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const colors = [
  "#8c8c8c",
  "#e3bb76",
  "#2b82c9",
  "#c1440e",
  "#d4a373",
  "#f4e2bb",
  "#7de3e1",
  "#3160b6",
];

const section = document.querySelector(".listPlanets");

for (const i in planets) {
  const div = document.createElement("div");
  div.textContent = planets[i];
  div.style.backgroundColor = colors[i];
  div.classList.add("planet");
  section.appendChild(div);
}
