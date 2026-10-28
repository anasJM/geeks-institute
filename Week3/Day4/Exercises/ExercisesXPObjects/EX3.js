const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);

const multiplyByTwo = usersArray.map((value) => [`${value[0]}`, value[1] * 2]);
console.log(multiplyByTwo);
