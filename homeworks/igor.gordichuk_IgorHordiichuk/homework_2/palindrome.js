// entering numbers by user
function enterNums(){
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter first number: ', (firstNum) => {
        rl.question('Enter last number: ', (lastNum) => {
            if(+firstNum && +lastNum){
                if(+firstNum > +lastNum){
                    let change = firstNum;
                    firstNum = lastNum;
                    lastNum = change;
                }palindromeFinding(+firstNum, +lastNum);
            }else{
                console.log('Try to read something about the numbers');
            }
            rl.close();
        });
    });
}enterNums();

// palindromes searching
function palindromeFinding(num1, num2){
    let palindromes = [];
    for (let i = num1; i <= num2; i++){
        if(i.toString().split('').reverse().join('') === i.toString()){
            palindromes.push(i);
        }
    }
    console.log(`Your palindromes are: ${palindromes.toString()}`);
}