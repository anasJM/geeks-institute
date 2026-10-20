let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
let max = 0;

for (const value of age) {
    sum += value
    if (value > max) {
        max = value
    }
}

console.log(`sum: ${sum}`);
console.log(`max: ${max}`);