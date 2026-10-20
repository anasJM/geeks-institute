const person1 = {
  fullName: "Anas Jamlaoui",
  mass: 92,
  height: 192,
  calculateBMI: function () {
    return this.mass / (this.height / 100) ** 2;
  },
};

const person2 = {
  fullName: "Mohamed Amraoui",
  mass: 70,
  height: 176,
  calculateBMI: function () {
    return this.mass / (this.height / 100) ** 2;
  },
};

function compareBMI(person1, person2) {
  if (person1.calculateBMI() > person2.calculateBMI()) {
    return person1.fullName;
  } else {
    return person2.fullName;
  }
}

console.log(compareBMI(person1, person2));
