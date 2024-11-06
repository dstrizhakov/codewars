// для двух функций
function compose(f, g) {
  return (...rest) => f(g(...rest));
}

// для произвольного количества функций и одного аргумента
function compose(...funcs) {
    return function (arg) {
      return funcs.reduceRight((acc, fn) => fn(acc), arg)
    }
  }
