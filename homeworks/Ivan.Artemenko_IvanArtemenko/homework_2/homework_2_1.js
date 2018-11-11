const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the number of triangle levels from 3 to 15 ', (number) => {
let number_1 = number-0;
if(number_1 <= 16 && number_1 >= 3){
    for(let i = 2; i <= number_1+1; i++){
  	    let a = '**';	
        let b = ' ';
        let j = ((number_1+1)-i);
        a = a.repeat(i);
        b = b.repeat(j);
        console.log(b+a);
    }    
}else console.log('You must enter a number from 3 to 15')
 rl.close();
});