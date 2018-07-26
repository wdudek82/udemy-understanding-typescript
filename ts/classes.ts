class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, type: string, age: number) {
    this.name = name;
    this.type = type;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }
}

const person = new Person('Max', 'teacher', 28);

console.log(person);
console.log(person.getName());
console.log(person.getType());
