/**
 * Insert a number in an ordered array of numbers
 * ==> return a new array don't mutate the one given.
 * @param a - an array of number assumed to be in order
 * @param item - the item to be inserted in order
 */
export function arrayInsert(a: number[], item: number): number[] {
  const ret: number[] = [];
  let lastValue = -1;
  for (const v of a) {
    if (item < v && item > lastValue) {
      ret.push(item);
    }
    ret.push(v);
    lastValue = v;

  }
  if (0 === ret.length || item > lastValue) {
    ret.push(item);
  }
  return ret;
}
