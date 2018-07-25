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
let myName = 'Max';

// number
let myAge = 28;

// boolean
let hasHobbies = true;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: string[] = ['cooking', 'sports'];
console.log(typeof hobbies);

// tuples
let address: [string, number] = ['Superstreet', 99];
