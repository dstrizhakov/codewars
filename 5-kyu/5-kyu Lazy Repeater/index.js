function makeLooper(str) {
  const cache = {
    str,
    loop: 0,
  };
  return () => {
    const char = str[cache.loop];
    cache.loop += 1;
    if (cache.loop > str.length - 1) {
      cache.loop = 0;
    }
    return char;
  };
}


// решение через генератор
function makeLooper(str) {
    const funcGenerator = (function*() {
        while(true)
            for(let char of str)
                yield char;
    })();
    return () => funcGenerator.next().value;
}

function makeLooper(str) {
    let count = 0;
    return () => {
      if(count >= str.length) count = 0;
      return str[count++];
    }
  }