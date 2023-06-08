class File {
	constructor(fullName, contents) {
		this._fullName = fullName;
		this.countWords = 0;
		this.countSym = 0;
		this.contents = contents;
		this.getName = () => this._fullName;
		this.getContents = () => this.contents;
		this.write = (str) => this.contents != '' ? this.contents = `${this.contents}\n${str}` : this.contents = `${str}`
		this.gets = () => this.contents.split('\n')[this.countWords++];
		this.getc = () => this.contents.split('')[this.countSym++];
		this.arr = this.getName().split('.');
	}
	get fullName() {
		return this.getName();
	}
	get filename() {
		return this.arr.filter((item, i) => i != this.arr.length - 1).join('.');
	}
	get extension() {
		return this.arr[this.arr.length - 1];
	}
}