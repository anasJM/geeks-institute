import emojis from "./data.js";

function getRandomEmojis() {
  const randomIndexesSet = new Set();
  while (randomIndexesSet.size < 4) {
    let i = Math.floor(Math.random() * emojis.length);
    randomIndexesSet.add(i);
  }
  const randomEmojis = [...randomIndexesSet].map((index) => emojis[index]);
  const emojisNames = randomEmojis.map((value) => value.name);
  const correctIndex = Math.floor(Math.random() * 4);
  const correctAnswer = randomEmojis[correctIndex];

  return {
    emojis: emojisNames,
    correctAnswer,
  };
}

export default getRandomEmojis;
