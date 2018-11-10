const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the first number from 500 to 1000 ', (number_1) => {
	rl.question('Enter the second number from 500 to 1000 ', (number_2) => {
		let a = number_1-0;
		let b = number_2-1;
if(a >= 500  && b < 1000){		
	for (let i = a; i <= b; i++){
		let q = ((i/100)%10);
		let w = (i%10);
		if(Math.floor(q) === Math.round(w)){
		console.log(i);	
		}
	}
}else console.log('Invalid data enter a number from 500 to 1000');
rl.close();
});
});
