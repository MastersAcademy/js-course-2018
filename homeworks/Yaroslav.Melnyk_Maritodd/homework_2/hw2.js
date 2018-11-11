const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
function pyra(x){
    let j;
    let i =2;
    var spc = ' ';
    var str = '#';
    for (j = x; j >=1; j--){
        i += 2;
        console.log(spc.repeat(j) + str.repeat(i));
    }
}

rl.question('Enter number of strings: ', (x) => {
    pyra(x);
    rl.close();
});