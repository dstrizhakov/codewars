/*
DESCRIPTION:
One of the common ways of representing color is the RGB color model, 
in which the Red, Green, and Blue primary colors of light are added 
together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the 
value V of the alternative HSV (Hue, Saturation, Value) color model.
Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. 
Return the brightest of these colors!

For example,
brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/

function brightest(colors) {
	let red,
		green,
		blue = 0;
	let maxBright = 0;
	let maxBrightNext = 0;
	let maxColorIndex = 0;

	for (let i = 0; i < colors.length; i++) {
		red = parseInt(colors[i].slice(1, 3), 16);
		green = parseInt(colors[i].slice(3, 5), 16);
		blue = parseInt(colors[i].slice(5, 7), 16);
		// простой случай когда в цвете есть FF
		if (red === 255 || green === 255 || blue === 255) {
			maxColorIndex = i;
			break;
		}

		maxBright = Math.max(red, green, blue);
		if (maxBright > maxBrightNext) {
			maxBrightNext = maxBright;
			maxColorIndex = i;
		}
	}
	return colors[maxColorIndex];
}

console.log(brightest(["#FFFFFF", "#123456", "#000000"]), "= #FFFFFF");
console.log(
	brightest(["#B548A5", "#E40A65", "#15C398", "#DA3D64"]),
	"= #E40A65"
);
