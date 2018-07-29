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
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    },
};
// greet({ firstName: 'Foo', age: 16 });
changeName(person2, 'Anna');
greet(person2);
person2.greet('Lootz');
var Person2 = /** @class */ (function () {
    function Person2(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Person2.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    };
    return Person2;
}());
var myPerson = new Person2('John', 36);
myPerson.greet('Doe');
var myDoubleFunction;
myDoubleFunction = function (num1, num2) {
    return num1 + num2;
};
function double(n) {
    return n * 2;
}
var oldPerson = {
    firstName: 'John',
    foo: 5,
    greet: function (lastName) {
        console.log('Hello! I\'m ' + this.firstName + ' ' + lastName);
    },
};
oldPerson.greet('Smith');
//# sourceMappingURL=interfaces.js.map