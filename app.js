"use strict";
/* class Greeter(greeting: string) {
  constructor() {
    this.greeting = greeting;
  }
}

Greeter.prototype.greet = function() {
  return "Hello, " + this.greeting;
}

// Oops, we're passing an object when we want a string. This will print
// "Hello, [object Object]" instead of "Hello, world" without error.
let greeter = new Greeter({message: "world"});

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
  alert(greeter.greet());
};

document.body.appendChild(button); */
// string
var myName = 'Max';
// number
var myAge = 28;
// boolean
var hasHobbies = true;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['cooking', 'sports'];
console.log(hobbies);
// tuples
var address = ['Superstreet', 99];
// enums
var Color;
(function (Color) {
    Color[Color["gray"] = 0] = "gray";
    Color[Color["green"] = 100] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var myColor = Color.green;
console.log(myColor);
console.log(Color.blue);
// any
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
// functions
function add(a, b) {
    return "" + (a + b);
}
console.log(add(2, 3));
// void
function sayHello() {
    console.log('Hello!');
}
sayHello();
// function types
var myFunction;
myFunction = add;
// objects
var userData = {
    name: 'Max',
    age: 27,
};
var someData;
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge;
myRealRealAge = 27;
myRealRealAge = '27';
// check type
var finalValue = 'A string';
// never
function neverReturn() {
    throw new Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
