function displayStudentInfo(objUser) {
  let { first, last } = objUser;
  console.log(`Your fullname is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });
