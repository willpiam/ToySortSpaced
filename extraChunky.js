
// having trouble with a problem. lets simplify it and see if we can find a solution
function randomColor() {
	const colors = [
		"red",
		"blue",
		"green",
		"oringe",
		//	"pink",
		//	"yellow",
		//	"brown",
		//	"purple",
		//	"grey",
		//	"black",
	];
	return colors[Math.floor(Math.random() * colors.length)]
}

function randomNumber() {
	return Math.floor(Math.random() * 100);
}

const arr = [];

for (let i = 0; i < 15; i++)
	arr.push({ color: randomColor(), number: randomNumber() });

// add extra chunks
for (let i = 0; i < 10; i++)
	arr.push({ color: "red", number: randomNumber() });

console.log(`ORIGINAL ARRAY`);
console.log(arr);

console.log(`SORTED BY NUMBER ARRAY`);
arr.sort((a, b) => a.number - b.number);
console.log(arr);

function swapInArr(_arr, i, k) {
	[_arr[i], _arr[k]] = [_arr[k], _arr[i]];
}

console.log(`TRY AND REMOVE COLOR CLUMPS`);

for (let i = 0; i < arr.length - 1; i++)
	if (arr[i].color === arr[i + 1].color)
		for (let k = i + 1; k < arr.length; k++) {
			if (arr[i].color === arr[k].color)
				continue;
			swapInArr(arr, i + 1, k);
			break;
		}

console.log(arr);

console.log(`Now go from back to front`);

for (let i = arr.length - 1; i > 0; i--)
	if (arr[i].color === arr[i - 1].color)
		for (let k = i - 1; k >= 0; k--) {
			if (arr[i].color === arr[k].color)
				continue;
			swapInArr(arr, i - 1, k);
			break;
		}

console.log(arr);

console.log(`Now find any remining clumps and sort them by number`);

for (let i = 0; i < arr.length - 1; i++) {

	if (arr[i].color !== arr[i + 1].color)
		continue;

	const clump = [arr[i]];

	for (let k = i + 1; k < arr.length; k++) {
		if (arr[k].color === arr[i].color) {
			clump.push(arr[k]);
			continue;
		}
		break;
	}

	// sort clump and replace it in the array
	console.log(`pre sort`);
	console.log(clump);
	clump.sort((a, b) => a.number - b.number);
	console.log(`post sort`);
	console.log(clump);

	// splice out old clump and replace it with sorted clump
	arr.splice(i, i + clump.length, ...clump);

	// jump i by length of clump
	i += clump.length - 1;
}

console.log(arr);