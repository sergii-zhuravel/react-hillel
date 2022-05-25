// interface Window {
//   width: number;
//   height: number;
// }

type myParamType = string | number;
let foo: string = "1232";

function sum<T>(a: T, b: T): T {
  return (a as number) + (b as number);
}

console.log(sum<number>(2, 2));

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Down);
