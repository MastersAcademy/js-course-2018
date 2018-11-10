let standardInput = process.stdin;
standardInput.setEncoding('utf-8');
console.log("Please input min and max values devided by space");

standardInput.on('data', function (data) {
	let numbers	= data.split(" ");
	let start = parseInt(numbers[0]);
	let end = parseInt(numbers[1]);
	
	if (numbers.length === 2 && start < end) {
		findMirrors(start, end);
	} else {
		console.log('Your input is invalid.');
	}
	
	process.exit();
});



function findMirrors(a, b) {
	for (let i = a; i <= b; i++) {
		if (i == i.toString().split("").reverse().join("")) {
			console.log(i);
		}
	}
}

