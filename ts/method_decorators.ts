// Method decorator
function editable(value: boolean) {
  return (target: any, propName: string, descriptor: PropertyDescriptor) => {
    descriptor.writable = value;
  };
}

// Property decorator
function overwitable(value: boolean) {
  return (target: any, propName: string): any => {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };
    return newDescriptor;
  };
}

// class NewProject {
//   @overwitable(false)
//   public projectName: string;

//   constructor(name: string) {
//     this.projectName = name;
//   }

//   @editable(true)
//   public calcBudget() {
//     console.log(1000);
//   }
// }

// const project = new NewProject('super project');

// project.calcBudget();
// project.calcBudget = () => {
//   console.log(2000);
// };
// project.calcBudget();
// // project.projectName = 'New name';

// console.log(project);


// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target:', target);
  console.log('Method name:', methodName);
  console.log('Parameter index:', paramIndex);
}

class Course {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public printStudentNumber(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Super Course');
course.printStudentNumber('anything', true);
course.printStudentNumber('anything', false);
