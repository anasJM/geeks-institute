const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["st", "nd", "rd", "th"];

colors.forEach((color, index) => {
  if (index < 3) {
    console.log(`${index + 1}${ordinal[index]} choise is ${color}`);
  } else {
    console.log(`${index}${ordinal[3]} choise is ${color}`);
  }
});
