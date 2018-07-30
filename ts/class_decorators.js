"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
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
function logging(value) {
    return value ? logged : null;
}
// @logging(true)
// class Car {
// }
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant2 = /** @class */ (function () {
    function Plant2() {
        this.name = 'a plant';
    }
    Plant2 = __decorate([
        logging(true),
        printable
    ], Plant2);
    return Plant2;
}());
var plant2 = new Plant2();
plant2.print();
//# sourceMappingURL=class_decorators.js.map