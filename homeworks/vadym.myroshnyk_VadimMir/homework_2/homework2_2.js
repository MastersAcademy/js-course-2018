const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the first number: ', (min) => {
    rl.question('Please enter the second number: ', (max) => {
        let rangeMin = + min;
        let rangeMax = + max;

        for(let i = rangeMin; i < rangeMax; i++){
            let checkPalidromes = i.toString().split('').reverse().join('');
            if( checkPalidromes === i.toString()){
                console.log(i);
            }
        }
        rl.close();
    });
} );





