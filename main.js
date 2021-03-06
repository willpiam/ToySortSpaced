
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
for (let i = 0; i < 30; i++)
	arr.push({ color: randomColor(), number: randomNumber() });

console.log(`ORIGINAL ARRAY`);
console.log(arr);

console.log(`SORTED BY NUMBER ARRAY`);
arr.sort((a, b) => a.number - b.number);
console.log(arr);

console.log(`TRY AND REMOVE COLOR CLUMPS`);

function swapInArr(_arr, i, k) {
	[_arr[i], _arr[k]] = [_arr[k], _arr[i]];
}

for (let i = 0; i < arr.length - 1; i++)
	if (arr[i].color === arr[i + 1].color)
		for (let k = i + 1; k < arr.length; k++) {
			if (arr[i].color === arr[k].color)
				continue;
			swapInArr(arr, i + 1, k);
			break;
		}

console.log(arr);