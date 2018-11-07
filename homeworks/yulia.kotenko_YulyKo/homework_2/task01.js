// 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How much? ', (answer) => {
    
    let spase = " ";
    let grille = "#";
    for (let i = 0; i < answer; i++) {
        console.log(spase.repeat(answer-i) + grille.repeat(2+i) + grille.repeat(2+i) + spase.repeat(answer-i));
    }
  rl.close();
});
