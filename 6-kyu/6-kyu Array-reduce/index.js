Array.prototype.reduce = function (process, initial) {
	for (let i = 0; i < this.length; i++) {
		if (initial === undefined) {
			i++;
			initial = this[0];
		}

		initial = process(initial, this[i]);
	}
	return initial;
};

//most clever 
Array.prototype.reduce = function (process, memo = this.shift()) {
	this.forEach((e) => memo = process(memo, e));
	return memo;
}