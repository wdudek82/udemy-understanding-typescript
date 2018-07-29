function logged(constructorFn: () => void) {
  console.log(constructorFn);
}

@logged
class Person3 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {

}


// Advanced
function printable(constructorFn: () => void) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true)
@printable
class Plant {
  name: string = 'a plant';
}

const plant1 = new Plant();
(plant1 as any).print();
