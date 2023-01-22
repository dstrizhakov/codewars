/*
Description:
The input will be an array of dictionaries.
Return the values as a string-seperated sentence in the order
of their keys' integer equivalent (increasing order).
The keys are not reoccurring and their range is -999 < key < 999.
The dictionaries' keys & values will always be strings and will
always not be empty.
An example:
Input:
List = [
				{'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
				{'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
			 ]

Output:
'Vatsan took his dog for a spin'
*/

// в Codewars отсутствует метод flat, пришлось добавить свой)
Object.defineProperty(Array.prototype, 'flat', {
	value: function (depth = 1) {
		return this.reduce(function (flat, toFlatten) {
			return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
		}, []);
	}
});

function sentence(List) {
	//получим ключи всех объектов в массиве
	let keys = [];
	for (let i = 0; i < List.length; i++) {
		keys.push(Number(Object.keys(List[i])))
	}
	//отсортируем ключи в порядке возрастания
	let sortedKeys = keys.flat().sort((a, b) => a - b)
	// объединим массивы в один для удобства
	let obj = {}
	for (let i = 0; i < List.length; i++) {
		for (let key in List[i]) {
			obj[key] = List[i][key]
		}
	}
	// соберем массив слов по отсортированным ключам
	let values = [];
	for (let i = 0; i < sortedKeys.length; i++) {
		values.push(obj[sortedKeys[i]])
	}
	// вернем скленный в строку массив
	console.log(values.join(' '))
	return values.join(' ')
}

// а можно было сделать гораздо проще:
// const sentence = list =>
//   list
//     .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
//     .map(item => Object.values(item)[0])
//     .join(' ')