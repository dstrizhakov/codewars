/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
 */

function once(fn) {
  let called = false;
  return (...args) => {
    if (called) return;
    called = true;
    return fn(...args);
  };
}

function once(fn) {
  return function () {
    try {
      return fn && fn.apply(this, arguments);
    } finally {
      fn = undefined;
    }
  };
}
