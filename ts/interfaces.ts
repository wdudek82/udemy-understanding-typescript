interface INamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
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
};

greet({ firstName: 'Foo', age: 16 });
changeName(person2, 'Anna');
greet(person2);
