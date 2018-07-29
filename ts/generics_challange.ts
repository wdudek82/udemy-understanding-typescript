class MyMap<T> {
  private map: { [key: string]: T } = {};

  public setItem(key: string, item: T) {
    this.map[key] = item;
  }

  public getItem(key: string) {
    return this.map[key];
  }

  public clear() {
    this.map = {};
  }

  public printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();

numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
numberMap.setItem('oranges', 8);

console.log(numberMap.getItem('apples'));

numberMap.clear();

console.log(numberMap.getItem('apples'));