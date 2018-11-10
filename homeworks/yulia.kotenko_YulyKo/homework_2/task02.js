const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('first nomber ', (answer) => {
  r1.question('final number ', (answer2) => {
      for (answer; answer < answer2; answer++) {

        let newNumber = answer.toString().split('').reverse().join('');
        let rev = answer.toString();
        
        if (newNumber === rev) {
           console.log(answer);
        }
      }
      rl.close();
   });
});