/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective 
of this kata is to determine the number of pair of gloves you can 
constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the 
number of pairs you can constitute, assuming that only gloves 
of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
 */

// мое решение:
function numberOfPairs(gloves) {
  let glovesByColor = new Map();
  for (let i = 0; i < gloves.length; i++) {
    if (!glovesByColor.has(gloves[i])) {
      glovesByColor.set(gloves[i], 1);
    } else {
      glovesByColor.set(gloves[i], glovesByColor.get(gloves[i]) + 1);
    }
  }
  let pairCount = 0;
  glovesByColor.forEach((value, key) => {
    if (value > 1) {
      pairCount += Math.floor(value / 2);
    }
  });

  return pairCount;
}
