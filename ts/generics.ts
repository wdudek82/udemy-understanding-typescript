// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Max'));
console.log(echo(27));
console.log(echo({ name: 'Max' }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho<string>('Max').length);

// Length does not exist on type number
// console.log(betterEcho<number>(27).length);

console.log(betterEcho({ name: 'Max' }));

// Build-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push('bla');

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(e => console.log(e));
}

printAll<string>(['Apple', 'Banana']);


// Generit Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>('Helo, World!'));


// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  public baseValue: T;
  public multiplyValue: U;

  public calculateCircumference(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculateCircumference());
