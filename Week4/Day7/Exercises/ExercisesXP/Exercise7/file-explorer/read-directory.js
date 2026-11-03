const fs = require("fs");

const allDirectory = fs.readdirSync(".", (err) => {
  if (err) {
    console.log(err);
  }
});

console.log(allDirectory);
