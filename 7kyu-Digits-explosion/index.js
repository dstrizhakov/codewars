/*
 DESCRIPTION:
Given a string made of digits [0-9], return a string where each digit is repeated 
a number of times equals to its value.
Examples
explode("312")
should return :
"333122"
 */

// мое решение:
function explode(s) {
  return s
    .split("")
    .map((n) => {
      let result = "";
      for (let i = 0; i < n; i++) {
        result += n;
      }
      return result;
    })
    .join("");
}

//самое умное:
// const explode = s => s.replace(/\d/g, d => d.repeat(d));
// /\d/g - паттерн возвращает массив цифр от 0 до 9
// затем используя метод строк repeat повторяем d кол-во раз
// преобразование типов происходит не явно

console.log(explode("312"), " = ", "333122");
console.log(explode("102269"), " = ", "12222666666999999999");
console.log(explode("0"), " = ", "");
console.log(explode("000"), " = ", "");
