function findAvg(gradesList) {
  let sum = 0;

  for (const value of gradesList) {
    sum += value;
  }
  let avg = sum / gradesList.length;
  console.log(`average: ${avg}`);
  return avg;
}

function checkAvg(avg) {
  if (avg > 65) {
    console.log(`Congratulations! you average is ${avg}, you passed.`);
  } else {
    console.log(
      `Unfortunatly! you average is ${avg}, you must repeat the course.`,
    );
  }
}

const gradesList = [70, 84, 64, 20];
checkAvg(findAvg(gradesList));
