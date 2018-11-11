const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the height of the pyramid? ', (answer) => {
 
let symbolA = "#";
let symbolB = " ";
let height = + answer;
    

for (let i = 1; i < height + 1; i++){
    console.log(symbolB.repeat(height - i) + symbolA.repeat(i) + symbolA.repeat(i));
 }

  rl.close();
});
