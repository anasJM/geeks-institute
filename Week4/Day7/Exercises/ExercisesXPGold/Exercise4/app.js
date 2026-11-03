const { faker } = require("@faker-js/faker");

const users = [];
const addObjectsToUsers = () => {
  const user = {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    country: faker.location.country(),
  };
  users.push(user);
};

addObjectsToUsers();

console.log(users);
