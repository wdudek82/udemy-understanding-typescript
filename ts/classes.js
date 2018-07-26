"use strict";
var Person = /** @class */ (function () {
    function Person(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getType = function () {
        return this.type;
    };
    return Person;
}());
var person = new Person('Max', 'teacher', 28);
console.log(person);
console.log(person.getName());
console.log(person.getType());
//# sourceMappingURL=classes.js.map