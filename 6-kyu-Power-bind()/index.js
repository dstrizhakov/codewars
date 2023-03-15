// You probably know about Function.prototype.bind method in JavaScript. It returns a copy of
// the original function but this function will always be called in the specified context.
// The problem is that you can't rebind another context any more.

// мое решение, работает локально, не проходит тесты на codewars:=(
Function.prototype.bind = function (context) {
  if (!globalThis.func) {
    globalThis.func = this;
  }
  return function (...arg) {
    globalThis.func.call(context, ...arg);
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
