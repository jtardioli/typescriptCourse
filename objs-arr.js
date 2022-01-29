"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Josh",
//   age: 30,
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Josh",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
let favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(Role.ADMIN);
