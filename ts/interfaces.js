"use strict";
function greet(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person, newName) {
    person.firstName = newName;
}
var person2 = {
    age: 27,
    firstName: 'Max',
};
greet({ firstName: 'Foo', age: 16 });
changeName(person2, 'Anna');
greet(person2);
//# sourceMappingURL=interfaces.js.map