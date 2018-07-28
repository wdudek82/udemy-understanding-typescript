"use strict";
var CircleMath;
(function (CircleMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    CircleMath.calculateCircumference = calculateCircumference;
})(CircleMath || (CircleMath = {}));
//# sourceMappingURL=circleMath.js.map