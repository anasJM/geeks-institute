const fs = require("fs");

const readFile = (filePath) => {
  const info = fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const writeFile = (filePath, data) => {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("write operation complete");
    }
  });
};

// writeFile("Hello World.txt", "Hello World !!");
// writeFile("Bye World.txt", "Bye World !!");
// const data = readFile("Hello World.txt");

module.exports = {
  readFile,
  writeFile,
};
