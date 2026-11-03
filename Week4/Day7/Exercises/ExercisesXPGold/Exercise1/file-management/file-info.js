const fs = require("fs");
const path = require("path");

const displayFileInfo = (fileName) => {
  const fullPath = path.join(__dirname, "data", fileName);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`Size: ${stats.size}\nCreation time: ${stats.ctime}`);
  }
};

module.exports = {
  displayFileInfo,
};
