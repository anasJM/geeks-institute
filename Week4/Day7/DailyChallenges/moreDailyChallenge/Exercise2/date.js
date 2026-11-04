import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { differenceInMinutes } from "date-fns";

const getMinutesDifference = async () => {
  const rl = readline.createInterface({ input, output });

  const birthday = await rl.question("Your birthday (YYYY-MM-DD): ");
  const now = new Date();
  const userBirthdayDate = new Date(birthday);
  console.log(
    `you lived for ${differenceInMinutes(userBirthdayDate, now) * -1} minutes machallah!`,
  );
};

export { getMinutesDifference };
