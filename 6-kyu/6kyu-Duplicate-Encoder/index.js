/*
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

// Мое решение:
function duplicateEncode(word) {
  let str = word.toLowerCase();
  let map = new Map();
  let result = "";
  //считаем буквы и пишем в map сколько каких букв
  for (let i = 0; i < str.length; i++) {
    map.has(str[i]) ? map.set(str[i], map.get(str[i]) + 1) : map.set(str[i], 1);
  }
  //снова пробегаем по строке, если такая буква одна  то прибавим '(' иначе ')'
  for (let i = 0; i < str.length; i++) {
    map.get(str[i]) === 1 ? (result += "(") : (result += ")");
  }
}

/* Самое умное решение: 
 function duplicateEncode(word){
   return word
     .toLowerCase()
     .split('')
     .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
     })
     .join('');
}

Интересное применение w.indexOf(a) == w.lastIndexOf(a)
Если выражения равны значит оба поиска вернули один и тот же индекс
значит символ встречается лишь один раз и мы возвращаем '('
иначе это разные экземпляры символа (значит символ повторяется) и мы возвращаем ')'
*/
