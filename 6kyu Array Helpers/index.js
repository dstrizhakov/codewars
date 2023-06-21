Array.prototype.square = function () {
	return this.map(i => i * i)
}
Array.prototype.cube = function () {
	return this.map(i => i * i * i)
}
Array.prototype.average = function () {
	return this.reduce((acc, i) => acc + i, 0) / this.length
}
Array.prototype.sum = function () {
	return this.reduce((acc, i) => acc + i, 0)
}
Array.prototype.even = function () {
	return this.filter(i => i % 2 === 0)
}
Array.prototype.odd = function () {
	return this.filter(i => i % 2 !== 0)
}