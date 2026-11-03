import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const validateUserFullName = (name) => {
  const pattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  return pattern.test(name) ? true : false;
};

const askForName = async () => {
  const rl = readline.createInterface({ input, output });
  const fullName = await rl.question("What is you name? ");
  if (validateUserFullName(fullName)) {
    console.log(`Success: ${fullName} is valid!`);
  } else {
    console.log("Invalid format");
  }
};

askForName();
