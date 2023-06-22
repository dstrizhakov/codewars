var multiFilter = function (...func) {
  return function (arg) {
    return func.reduceRight((acc, fn) => (fn(acc) ? acc : 0), arg);
  };
};



const multiFilter = (...func) => x => func.every(f => f(x));