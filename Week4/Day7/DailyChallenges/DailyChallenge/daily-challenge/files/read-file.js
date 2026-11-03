const fs = require("fs");

const readFile = (filePath) => {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
};

module.exports = {
  readFile,
};
