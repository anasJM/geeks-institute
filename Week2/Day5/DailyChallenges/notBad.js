let sentence = "This movie is not so bad !";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

arraySentence = [...sentence];

if (
  sentence.indexOf("not") != -1 &&
  sentence.indexOf("bad") != -1 &&
  wordBad > wordNot
) {
  arraySentence.splice(wordNot, wordBad - wordNot + 3, ..."good");
  sentence = arraySentence.join("");
  console.log(sentence);
} else {
  console.log(sentence);
}
