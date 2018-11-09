const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question('Please enter height of your pyramid', (answer) => {
    if (Number.isNaN(Number(answer))) {
        console.log('Invalid data, please enter a number');
    } else {
        const whitespace = ' ';
        const symbol = '#';
        let startNumber = 4;
         for (let i = 0; i < answer; i++) {
            
            console.log(whitespace.repeat(answer - (i + 1)) + symbol.repeat(startNumber));
            startNumber = startNumber + 2;
        }
    }
     rl.close();
});



