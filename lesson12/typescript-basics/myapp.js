"use strict";
// interface Window {
//   width: number;
//   height: number;
// }
var foo = "1232";
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Down);
