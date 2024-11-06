Object.prototype.hash = function (string) {
	try {
		return eval(`this.${string}`);
	} catch (e) {
		return undefined;
	}
};

// most clever:

Object.prototype.hash = function (string) {
	const arr = string.split('.');
	return arr.reduce(function (pv, cv) {
		return (pv) ? pv[cv] : pv;
	}, this);
}

Object.prototype.hash = function (string) {
	return string.split('.').reduce((result = this, item) => result = result[item], this);
}