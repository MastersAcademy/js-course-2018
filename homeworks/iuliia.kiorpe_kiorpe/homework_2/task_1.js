let standard_input = process.stdin;
standard_input.setEncoding('utf-8');
console.log("Please input text in command line.");

standard_input.on('data', function (strings) {
    strings = parseInt(strings);
	
	if (strings > 0) {
		buildPiramid(strings);
	} else {
		console.log('Your input is invalid.');
	}
	
	process.exit();
});

function buildPiramid(x) {
	let sharp = '#';
	let space = ' ';
	let h_lenght = x + 1;

	for (let i = 0; i < x; i++) {
		console.log(space.repeat(h_lenght - (i + 2)) + sharp.repeat((i + 2) * 2));
	}
}


	