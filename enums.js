"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
const person = {
    name: 'Hans',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};
if (person.role === Role.Admin) {
    console.log('Admin');
}
