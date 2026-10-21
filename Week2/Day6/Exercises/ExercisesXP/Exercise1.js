function displayNumbersDivisible(divisor) {
  let sum = 0;

  console.log("Outcome: ");
  for (let i = 0; i <= 500; i++) {
    if (i % divisor == 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(`Sum: ${sum}`);
}

displayNumbersDivisible(23);
