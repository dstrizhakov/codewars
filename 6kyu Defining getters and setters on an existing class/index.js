Object.defineProperty(Person.prototype, 'name', {
	get: function () {
		return `${this.firstName} ${this.lastName}`
	},
	set: function (name) {
		let split = name.split(' ');
		this.firstName = split[0];
		this.lastName = split[1];
	}
});


// most clever: можно было не переопределять Person.prototype.getName и использовать деструктуризацию в сеттере
// Object.defineProperty(Person.prototype, "name", {
// 	get: Person.prototype.getName,
// 	set: function(name) { [this.firstName, this.lastName] = name.split(" "); },
