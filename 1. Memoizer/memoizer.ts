const memoize = <T = any>(fn: Function) => {
    const cache = new Map();
    const cached = function (this: any, val: T) {
      return cache.has(val)
        ? cache.get(val)
        : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
  };

const doubleNumber = (x:number) => x * 2;
const doubleNumberCached = memoize(doubleNumber);

console.time('Execution Time');
doubleNumber(2);
doubleNumber(5);
doubleNumber(6);
doubleNumber(2);
doubleNumber(5);
doubleNumber(6);
doubleNumber(2);
doubleNumber(5);
doubleNumber(6);
console.timeEnd('Execution Time');

console.time('Execution Time');
doubleNumberCached(2);
doubleNumberCached(5);
doubleNumberCached(6);
doubleNumberCached(2);
doubleNumberCached(5);
doubleNumberCached(6);
doubleNumberCached(2);
doubleNumberCached(5);
doubleNumberCached(6);
console.timeEnd('Execution Time');

// To get all cache
console.log(doubleNumberCached.cache);

