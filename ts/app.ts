let myTrueName: string = 'Max';
let myTrueAge: number = 27;
let anything;
anything = 12;
// anything = 'twelve';

console.log(anything);

console.log('It\'s paused!');
console.log('It\'s alive');

console.log(controlMe(true, true));


function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number = 0;

  if (isTrue) {
    result = 14;
  }

  return result;
}

let something = 108;

if (true) {
  console.log(something);
}

function makeArray(first: number, second: number, ...n: number[]): void {
  console.log(first);
  console.log(second);
  console.log(n);
}

makeArray(1, 2, 3, 4, 5, 6);

const arr = [12, 34, 1, 34, 21, 4];
const [a,,,, ...b] = arr;

console.log(a, b);


// Importing modules
import calculateRectangle from './math/rectangle';

const rect = calculateRectangle(10, 20);

console.log('rect"', rect);
