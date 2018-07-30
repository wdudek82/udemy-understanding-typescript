function logged(constructorFn: () => void) {
  console.log(constructorFn);
}

// @logged
// class Person3 {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }


// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

// @logging(true)
// class Car {

// }


// Advanced
function printable(constructorFn: () => void) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true)
@printable
class Plant2 {
  public name: string = 'a plant';
}

const plant2 = new Plant2();
(plant2 as any).print();
