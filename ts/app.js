"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var myTrueName = 'Max';
var myTrueAge = 27;
var anything;
anything = 12;
// anything = 'twelve';
console.log(anything);
console.log('It\'s paused!');
console.log('It\'s alive');
console.log(controlMe(true, true));
function controlMe(isTrue, somethingElse) {
    var result = 0;
    if (isTrue) {
        result = 14;
    }
    return result;
}
var something = 108;
if (true) {
    console.log(something);
}
function makeArray(first, second) {
    var n = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        n[_i - 2] = arguments[_i];
    }
    console.log(first);
    console.log(second);
    console.log(n);
}
makeArray(1, 2, 3, 4, 5, 6);
var arr = [12, 34, 1, 34, 21, 4];
var a = arr[0], b = arr.slice(4);
console.log(a, b);
// Importing modules
var rectangle_1 = __importDefault(require("./math/rectangle"));
var rect = rectangle_1.default(10, 20);
console.log('rect"', rect);
//# sourceMappingURL=app.js.map