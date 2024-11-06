const argKey = (x) =>
  typeof x === "object" ? JSON.stringify(x) : x.toString() + ":" + typeof x;

const generateKey = (args) => args.map(argKey).join("|");

function cache(func) {
  const cache = new Map();
  return (...args) => {
    const key = generateKey(args);
    console.log(key);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const res = func(...args);
    cache.set(key, res);
    return res;
  };
}

// или все в одной функции
function cache(fun) {
  const cacheMap = new Map();
  return function (...argums) {
    const args = JSON.stringify(argums);
    if (cacheMap.has(args)) {
      return cacheMap.get(args);
    }
    const result = fun.call(this, ...argums);
    cacheMap.set(args, result);
    return result;
  };
}
