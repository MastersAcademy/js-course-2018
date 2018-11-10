const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('final nomber ', (answer) => {
        for (let i  = 0; i < answer; i++) {

            let newN = i.toString().split('').reverse().join('');
            let rev = i.toString();

            if (rev === newN) {
                console.log(i);
            }
    }
    rl.close();
});