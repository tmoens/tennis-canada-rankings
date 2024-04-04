// This solves a specific problem:
// The system has a number of things that can (but do not always) change on a year by year basis.
// For example, the names of the event categories for masters were set out in 2013, changed in 2019
// and changed again in 2023.
// Or, for Juniors, provincial ratings factors change every year.
// The KeyedStaticCollection allows the software to look up the value of an item for any particular year
// and get the value that was in effect in that year.

// The KeyedStaticCollection is Static.  I.e. the values are known at compile time. When, for example,
// the provincial junior ratings factors are updated every year, the new values are added (see the
// assets/event-groups directory) and the system is rebuilt and redeployed.

export interface IKeyedStaticCollection<T> {
  containsKey(key: string): boolean;

  getCount(): number;

  getKeys(): string[];

  getValues(): T[];

  getItem(key: string): T;
}

export class KeyedStaticCollection<T> implements IKeyedStaticCollection<T> {
  private keys: string[] = [];
  private values: T[] = [];
  private count = 0;

  constructor(private items: { [index: string]: T }) {
    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        this.keys.push(prop);
        this.values.push(this.items[prop]);
        this.count++;
      }
    }
  }


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

  // This next bit is bogosity. It requires the key to be a year, but ok it works.
  // Get the value of the entry that has the closest year equal to or lower than
  // the given year.
  // It is used in a collection where a key missing from a sequence is assumed to
  // have the value of the item with the next lower key.
  // So if the keys existing in the collection are 2013, 2018 and 2019, then
  // getVersion(2024) return the value as it was in 2019
  // getVersion(2019) return the value as it was in 2019
  // getVersion(2018) return the value as it was in 2018
  // getVersion(2017) return the value as it was in 2013
  // 2012 or less return null
  public getVersion(key: string): T {
    let candidate = null;
    this.keys.forEach(k => {
      if (k <= key && k > candidate) {
        candidate = k;
      }
    });
    if (candidate) {
      return this.getItem(candidate);
    } else {
      return null;
    }
  }
}
