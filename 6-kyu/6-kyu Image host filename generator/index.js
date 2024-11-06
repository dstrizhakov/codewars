// take ascii codes from 65 (A) to 90 (Z)

function generateName() {

	let str = '';
	for (let i = 0; i < 6; i++) {
		str += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65))
	}
	if (!photoManager.nameExists('str')) {
		return str
	}
	return generateName()
}

//most clever (по моему эти решения не совсем верны, так как не проверяют уже имеющиеся имена...)
let i = 60466175
let generateName = () => (++i).toString(36)

const generateName = () =>
	Math.random()
		.toString(36)
		.slice(2, 8)