const chalk = require("chalk");

const colorfulMessage = (message) => {
  console.log(chalk.blue(message));
};

module.exports = {
  colorfulMessage,
};
