const { greet } = require("./greeting.js");
const { colorfulMessage } = require("./colorful-message.js");
const { readFile } = require("./files/read-file.js");

console.log(greet("Ahmed"));
colorfulMessage("salam aleikoum my brother");
readFile("./files/file-data.txt");
