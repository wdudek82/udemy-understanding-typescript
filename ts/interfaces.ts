interface NamedPerson {
  firstName: string,
};

function greet(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson, newName: string) {
  person.firstName = newName;
}

const person2 = {
  firstName: 'Max',
  age: 27,
}

greet(person2);
changeName(person2, 'Anna');
greet(person2);
