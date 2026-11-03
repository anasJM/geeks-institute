const fs = require("fs");

const data = fs.readFileSync("source.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFile("destination.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("write operation completed!");
  }
});
