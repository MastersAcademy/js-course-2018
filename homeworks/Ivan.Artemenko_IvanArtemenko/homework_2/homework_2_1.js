const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of triangle levels from 3 to 15 ', (number) => {
var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;
r1 = ('               ****\n');
r2 = ('             ******\n');
r3 = ('            ********\n');
r4 = ('           **********\n');
r5 = ('          ************\n');
r6 = ('         **************\n');
r7 = ('        ****************\n');
r8 = ('       ******************\n');
r9 = ('      ********************\n');
r10 = ('     **********************\n');
r11 = ('    ************************\n');
r12 = ('   **************************\n');
r13 = ('  ****************************\n');
r14 = (' ******************************\n');
r15 = ('********************************\n');

var number_1 = number -0;
	switch (number_1){
		case 3 : console.log (r1,r2,r3);
		break;
		case 4 : console.log (r1,r2,r3,r4);
		break;
		case 5 : console.log (r1,r2,r3,r4,r5);
		break;
		case 6 : console.log (r1,r2,r3,r4,r5,r6);
		break;
		case 7 : console.log (r1,r2,r3,r4,r5,r6,r7);
		break;
		case 8 : console.log (r1,r2,r3,r4,r5,r6,r7,r8);
		break;
		case 9 : console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9);
		break;
		case 10: console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10);
		break;
		case 11: console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11);
		break;
		case 12: console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12);
		break;
		case 13: console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13);
		break;
		case 14: console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14);
		break;
		case 15: console.log (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15);
		break;
		default : console.log('You have entered incorrect data, enter a number from 3 to 15 ');
	}
  rl.close();
});