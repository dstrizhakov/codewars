function flip(fn) {
    return (...args) => fn.apply(this, args.reverse())
}

// or using arrow func ret
const flip = (fn) => (...args) => fn.apply(this, args.reverse())