const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firstLetters = []

for (let i in names) {
    firstLetters.push(names[i][0])
}

societyName = firstLetters.sort().join("")
console.log(societyName)