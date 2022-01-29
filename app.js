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
var person = {
    name: "Josh",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
var favouriteActivities;
favouriteActivities = ["Sports"];
// better to just let typscript automatically detect objects
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(Role.ADMIN);
