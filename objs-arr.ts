// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Josh",
//   age: 30,
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Josh",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

let favouriteActivities: any[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(Role.ADMIN);
