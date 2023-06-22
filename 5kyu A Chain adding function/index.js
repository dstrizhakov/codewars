const add = function (n) {
  const f = (x) => add(n + x);
  f.valueOf = () => n;
  return f;
};


function add(n) {
    // Return self so we can make a chain
    let tail = (num) => add(n + num);
    
    /** 
     Javascript will call toString() before compare,
     We can use this feature to pass this kata.
     
     In real world, may need manual call toString
     method.
    **/
    tail.toString = () => n;
    
    return tail;
}
