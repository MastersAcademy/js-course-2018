
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Enter height: ', (height) => {
    console.log(`Height: ${height}`);
    r1.close();    
    if(isNaN( parseInt(height) )){
        console.log('Wrong input! Input a number, please!');
        return;
    }

    let space = ' ';
    let sharp = '#';

    for (i = 1; i <= height; i++){
        console.log(space.repeat(height-i) + sharp.repeat((i+1)*2));
    }
});
