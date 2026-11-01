// return a promise with uppercase words
const makeAllCaps = (wordsArray) => {
  return new Promise((resolve, reject) => {
    const checkString = wordsArray.every(
      (element) => typeof element == "string",
    );
    if (checkString) {
      resolve(wordsArray.map((element) => element.toUpperCase()));
    } else {
      reject("Error: not all the array element are 'string'");
    }
  });
};

//

const sortWords = (wordsArray) => {
  return new Promise((resolve, reject) => {
    if (wordsArray.length > 4) {
      const sortedArray = wordsArray.sort();
      resolve(sortedArray);
    } else {
      reject("array length is less than 5 ");
    }
  });
};

//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));
