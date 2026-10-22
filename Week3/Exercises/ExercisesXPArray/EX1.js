const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}`);
});

let checkValue = colors.some((value) => value == "Violet");
if (checkValue) {
  console.log("Yeah!");
} else {
  console.log("No...");
}
