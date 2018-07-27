"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
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
person.printAge();
person.setType('Cool guy');
console.log(person.getType());
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(type, age) {
        return _super.call(this, 'Max', type, age) || this;
    }
    return Max;
}(Person));
var max = new Max('instructor', 28);
max.printAge();
console.log(max.getName());
// Setters and Getters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "None!";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = 'Persymona';
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 100;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var it = new ITProject();
it.changeName('name');
console.log(it.projectName);
// Private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var one = OnlyOne.getInstance();
console.log(one.name);
//# sourceMappingURL=classes.js.map