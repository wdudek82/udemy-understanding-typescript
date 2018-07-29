interface INamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet(person: INamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: INamedPerson, newName: string) {
  person.firstName = newName;
}

const person2 = {
  age: 27,
  firstName: 'Max',
  hobbies: ['Cooking', 'Sports'],

  greet(lastName: string) {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  },
};

// greet({ firstName: 'Foo', age: 16 });
changeName(person2, 'Anna');
greet(person2);
person2.greet('Lootz');

class Person2 implements INamedPerson {
  public firstName: string;
  public age: number;

  constructor(firstName: string, age: number) {
    this.firstName = firstName;
    this.age = age;
  }

  public greet(lastName: string): void {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  }
}

const myPerson = new Person2('John', 36);

myPerson.greet('Doe');


// Function Types
interface IDoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: IDoubleValueFunc;
myDoubleFunction = (num1: number, num2: number) => {
  return num1 + num2;
};

function double(n: number) {
  return n * 2;
}


// Interface inheritance
