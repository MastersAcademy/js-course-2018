
const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question('please write height ', (answer) => {
    if (answer>0) {
        for(i=1; i<=answer; i++){
            let indent = ' ';
            let brick = '##';
            console.log(indent.repeat(answer-i) + brick + brick.repeat(i));
        }}
    else {
        console.log('Incorect height');}
    rl.close();
});



