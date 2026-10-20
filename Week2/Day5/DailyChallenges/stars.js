let stars = "";

// one loop
for (let i = 1; i <= 6; i++) {
  stars += `${"* ".repeat(i)}\n`;
}

// nested loops
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  stars += "\n";
}

console.log(stars);
