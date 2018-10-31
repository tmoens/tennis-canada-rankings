// This is a !very simple! class for accessing a collection of objects
// where all the members are known upon construction.
// WHY would you do this?  Because we have lots of them and it
// reduces duplicated code.
export interface IKeyedStaticCollection<T> {
  containsKey(key:string): boolean;
  getCount(): number;
  getKeys(): string[];
  getValues(): T[];
  getItem(key:string): T;
}

export class KeyedStaticCollection<T> implements IKeyedStaticCollection<T> {
  private keys: string[] = [];
  private values: T[] = [];

  constructor(private items: { [index: string]: T }) {
    for (let prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        this.keys.push(prop);
        this.values.push(this.items[prop]);
        this.count++;
      }
    }
  }

  private count: number = 0;

  public containsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }

  public getCount(): number {
    return this.count;
  }

  public getItem(key: string): T {
    return this.items[key];
  }

  public getKeys(): string[] {
    return this.keys;
  }

  public getValues(): T[] {
    return this.values;
  }

  public getFirst(): T {
    return  this.values[0];
  }

  // Get the value of the entry that has closest key equal to or lower than
  // the given key.
  // It is used in a list where a key missing from a sequence is assumed to
  // have the value of the item with the next lower key.
  // so if the keys ae 2013, 2018 and 2019, then if the key is
  // 2019 or more return 2019
  // 2018 return 2018
  // 2013 to 2017 return 2013
  // 2012 or less return null
  public getVersion(key:string):T{
    let candidate = null;
    this.keys.forEach(k => {
      if ( k <= key && k > candidate ) candidate = k;
    });
    if (candidate) {
      return this.getItem(candidate);
    } else {
      return null;
    }
  }
}
