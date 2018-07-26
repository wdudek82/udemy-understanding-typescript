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

