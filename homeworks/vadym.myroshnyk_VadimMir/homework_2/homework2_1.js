const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the height of the pyramid? ', (answer) => {

let height = + answer;

for (let i = 1; i < height + 1; i++){
    console.log(' '.repeat(height - i) + '#'.repeat(i) + '#'.repeat(i));
 }

  rl.close();
});
