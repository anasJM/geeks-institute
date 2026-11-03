import { persons } from "./data.js";

const ageAverage = (persons) => {
  const sum = persons.reduce((acc, curr) => acc + curr.age, 0);
  return sum / persons.length;
};

console.log(ageAverage(persons));
