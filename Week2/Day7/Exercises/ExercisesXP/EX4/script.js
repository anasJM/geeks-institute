const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let volume = 0;
  const radius = form["radius"].value;
  volume = (4 / 3) * Math.PI * parseInt(radius) ** 3;
  form["volume"].value = volume.toFixed(2);
});
