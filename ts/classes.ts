class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, type: string, age: number) {
    this.name = name;
    this.type = type;
    this.age = age;
  }

  printAge(): void {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
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

person.printAge();
person.setType('Cool guy');

console.log(person.getType());


// Inheritance
class Max extends Person {
  constructor(type: string, age: number) {
    super('Max', type, age);
  }
}

const max = new Max('instructor', 28);

max.printAge();
console.log(max.getName());


// Setters and Getters
class Plant {
  private _species: string = "None!";
  
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }

  get species() {
    return this._species;
  }
}

const plant = new Plant();

plant.species = 'Persymona';
console.log(plant.species);


// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));


// Abstract classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 100;

  abstract changeName(name: string): void; 

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }

}

const it = new ITProject();

it.changeName('name');
console.log(it.projectName);
