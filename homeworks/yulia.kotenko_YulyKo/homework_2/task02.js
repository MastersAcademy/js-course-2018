const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('final nomber (0; 10000] ', (answer) => {
     if(answer<=10000){
        for (let i = answer2; i < answer; i++) {
            let nomber = i;
            let newN = nomber.toString();
            if (newN[0]===newN[1] && newN[2]===undefined && newN[3]===undefined) {
                console.log(nomber);
            }else if (newN[0]===newN[2] && newN[0]!==newN[1] && newN[3]===undefined) {
                console.log(nomber);
            }else if(newN[0]===newN[2] && newN[2]===newN[1] && newN[3]===undefined){
                console.log(nomber);
            }else if (newN[0]===newN[1] && newN[1]===newN[2] && newN[2]===newN[3]) {
                console.log(nomber);
            }else if (newN[0]===newN[3] && newN[1]===newN[2] && newN[0]!==newN[1]) {
                console.log(nomber);
            }
        }
    }
    rl.close();
});