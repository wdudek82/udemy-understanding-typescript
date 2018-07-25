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
;
var myColor = Color.green;
console.log(myColor);
console.log(Color.blue);
