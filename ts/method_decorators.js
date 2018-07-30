"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// Property decorator
function overwitable(value) {
    return function (target, propName) {
        var newDescriptor = {
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
function printInfo(target, methodName, paramIndex) {
    console.log('Target:', target);
    console.log('Method name:', methodName);
    console.log('Parameter index:', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumber = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], Course.prototype, "printStudentNumber", null);
    return Course;
}());
var course = new Course('Super Course');
course.printStudentNumber('anything', true);
course.printStudentNumber('anything', false);
//# sourceMappingURL=method_decorators.js.map