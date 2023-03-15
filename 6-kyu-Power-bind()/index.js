// You probably know about Function.prototype.bind method in JavaScript. It returns a copy of
// the original function but this function will always be called in the specified context.
// The problem is that you can't rebind another context any more.

// Мое решение:
Function.prototype.bind = function (ctx) {
  const fn = this;
  return function () {
    const context = this === global ? ctx : this;
    return fn.apply(context, arguments);
  };
};

var func = function (a) {
  console.log("Argument is:", a);
  console.log("this = ", this);
  return this.prop;
};
var obj1 = { prop: 1 },
  obj2 = { prop: 2 };

func = func.bind(obj1);
func("Arg1");

func = func.bind(obj2);
func("Arg2");

// Will also produce 1 :(
// Your task is override the native Function.prototype.bind method by a new one that will allow you
// to rebind context multiple times. In this kata you don't need to worry about currying, testing
// function will never get params.

// мое решение, работает локально, не проходит тесты на codewars:=(

// Function.prototype.pbind = function (context) {
//   if (!globalThis.func) {
//     globalThis.func = this;
//   }
//   return function (...arg) {
//     globalThis.func.call(context, ...arg);
//   };
// };

// Function.prototype.pbind = function pBind(ctx) {
//   if (!pBind.func) {
//     pBind.func = this;
//   }
//   return function (...arg) {
//     pBind.func.call(ctx, ...arg);
//   };
// };

// Function.prototype.pbind = function powerbind(ctx) {
//   if (!powerbind.func) {
//     powerbind.func = this;
//   }

//   return function () {
//     powerbind.func.apply(ctx, arguments);
//   };
// };

//============================//
// Your solution modify a single global variable which is supposed to be the global name
// of all functions that are going to use .bind(). This simply won't work, even in theory.
// Use a Map (or WeakMap, your choice) to link each bound function to its original one.

(() => {
  // Closure function
  const bind = Function.prototype.bind; // Original bind
  const map = new Map(); // Map<BoundFunction, Function>

  Function.prototype.bind = function (context) {
    if (!map.has(this)) {
      // Not found in map => not bound.
      let bound = bind.call(this, context);
      map.set(bound, this);
      return bound;
    } else {
      let unbound = map.get(this);
      return bind.call(unbound, context);
    }
  };
})();

// Note that this does not work with functions bounded before the IIFE comes in action:

function foo() {
  return this.foo;
}

foo = foo.bind({ foo: 0 });

(() => {
  /* ... */
})();

console.log(foo()); // 0
console.log(foo.bind({ foo: -1 })()); // 0

// Try it:

(() => {
  const bind = Function.prototype.bind;
  const map = new Map();

  Function.prototype.bind = function (context) {
    if (!map.has(this)) {
      let bound = bind.call(this, context);
      map.set(bound, this);
      return bound;
    } else {
      let unbound = map.get(this);
      return bind.call(unbound, context);
    }
  };
})();

function func() {
  return this.prop;
}

console.log(func.bind(globalThis)()); // undefined

func = func.bind({
  prop: 1,
});
console.log(func()); // 1

func = func.bind({
  prop: 2,
});
console.log(func()); // 2

(() => {
  // Also works with locals
  function foo() {
    return this.foo;
  }

  const foo1 = foo.bind({
    foo: 3,
  });
  const foo2 = foo.bind({
    foo: 4,
  });

  console.log(foo1());
  console.log(foo2());
})();
