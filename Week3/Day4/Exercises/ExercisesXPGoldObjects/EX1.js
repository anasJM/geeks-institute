const printFullName = (fullname) => {
  const { first, last } = fullname;
  return `Your full name is ${first} ${last}`;
};

console.log(printFullName({ first: "Elie", last: "Schoppik" }));
