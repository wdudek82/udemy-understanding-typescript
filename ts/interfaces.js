"use strict";
;
function greet(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person, newName) {
    person.firstName = newName;
}
var person2 = {
    firstName: 'Max',
    age: 27,
};
greet(person2);
changeName(person2, 'Anna');
greet(person2);
//# sourceMappingURL=interfaces.js.map