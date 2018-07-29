"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Max'));
console.log(echo(27));
console.log(echo({ name: 'Max' }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Max').length);
// Length does not exist on type number
// console.log(betterEcho<number>(27).length);
console.log(betterEcho({ name: 'Max' }));
// Build-in Generics
var testResults = [1.94, 2.33];
testResults.push('bla');
// Arrays
function printAll(args) {
    args.forEach(function (e) { return console.log(e); });
}
printAll(['Apple', 'Banana']);
// Generit Types
var echo2 = betterEcho;
console.log(echo2('Helo, World!'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculateCircumference = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculateCircumference());
//# sourceMappingURL=generics.js.map