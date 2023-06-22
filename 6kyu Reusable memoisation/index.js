const memo =
  (fn, cache = new Map()) =>
  (arg) =>
    (cache.has(arg) ? cache : cache.set(arg, fn(arg))).get(arg);

const memo = (fn) => {
  const cache = {};
  return (x) => {
    const key = typeof x === "object" ? JSON.stringify(x) : x;
    if (!cache.hasOwnProperty(key)) cache[key] = fn(x);
    return cache[key];
  };
};

function memo(fn) {
  let cache = {};
  return (n) => {
    let key = typeof n === "object" ? JSON.stringify(n) : n;
    if (!(key in cache)) {
      cache[key] = fn(n);
    }
    return cache[key];
  };
}

const memo = (fn) => {
  const mem = new Map();
  return (x) => {
    if (!mem.has(x)) mem.set(x, fn(x));
    return mem.get(x);
  };
};

function memo(fn) {
  const cache = new Map();

  return function memoizedFunc(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
