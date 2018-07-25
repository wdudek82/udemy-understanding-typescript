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
console.log(hobbies);

// tuples
let address: [string, number] = ['Superstreet', 99];

// enums
enum Color {
  gray,
  green = 100,
  blue = 3,
}

let myColor: Color = Color.green;

console.log(myColor);
console.log(Color.blue);

// any
let car: any = 'BMW';

car = { brand: 'BMW', series: 3 };

// functions
function add(a: number, b: number): string {
  return `${a + b}`;
}

console.log(add(2, 3));

// void
function sayHello(): void {
  console.log('Hello!');
}

sayHello();

// function types
let myFunction: (val1: number, val2: number) => string;
myFunction = add;

// objects
let userData = {
  name: 'Max',
  age: 27,
};

let someData: { name: string, age: number };

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  } 
}

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  } 
}

// union types
let myRealRealAge: number | string;
myRealRealAge = 27;
myRealRealAge = '27';
