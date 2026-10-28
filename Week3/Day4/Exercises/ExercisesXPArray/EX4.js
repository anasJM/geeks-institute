const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

//#
const welcomeStudents = users.map((value) => `Hello ${value.firstName}`);
console.log(welcomeStudents);

//#
const fullStackResidentStudents = users.filter(
  (value) => value.role == "Full Stack Resident",
);
console.log(fullStackResidentStudents);

//#
const LastnameStudents = users
  .filter((value) => value.role == "Full Stack Resident")
  .map((value) => value.firstName);
console.log(LastnameStudents);
