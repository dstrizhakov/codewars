/*
After yet another dispute on their game the Bingo Association decides to change 
course and automate the game.
Can you help the association by writing a method to create a random Bingo card?
Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
ask
Write the function get_card()/getCard(). The card must be returned as an array 
of Bingo style numbers:[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns 
the order of the numbers is random.
 */


// Мое решение: 
function getCard() {
	//Определяем массив колонок
	let columns = ['B', 'I', 'N', 'G', 'O'];
	//Пробегаем по нему и возвращаем новый массив
	//на каждой итерации вернем массив из пяти значений
	let result = columns.map(col => {
		// Массив случайных чисел, числа не должны повторяться
		let uniqueArr = [];
		// Выполняем цикл пока не заполним массив 5 уникальными значениями
		for (let i = 0; uniqueArr.length < 5; i++) {
			let min = (columns.indexOf(col) * 15 + 1);
			let max = (columns.indexOf(col) * 15 + 15);
			let random = randomInteger(min, max);
			if (!uniqueArr.includes(random)) {
				uniqueArr.push(random)
			}
		}
		// Склеиваем массив из буквы и цифр uniqueArr и возвращаем его 
		let tempArr = []
		for (let i = 0; i < 5; i++) {
			tempArr.push(col + uniqueArr[i].toString())
		}
		return tempArr
	})
	// так как в результате получили массив массивов применим flat()
	result = result.flat()
	// удалим 12 элемент массива
	result.splice(12, 1)
	return result
}

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

// Понравилось альтернативное решение:
// function getCard() {
//   let range = {
//     'B': [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15],
//     'I': [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//     'N': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
//     'G': [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//     'O': [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
//   };
//   return [
//     'B', 'B', 'B', 'B', 'B',
//     'I', 'I', 'I', 'I', 'I',
//     'N', 'N',      'N', 'N',
//     'G', 'G', 'G', 'G', 'G',
//     'O', 'O', 'O', 'O', 'O'
//   ]
//   .map(c => c + range[c].splice(Math.random() * range[c].length | 0, 1));
// }