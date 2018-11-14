const readline = require('readline');
const SPACE_S = ' ';
const SHARP_S = '##';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Type count of floors ', (answer) => {
    console.log(typeof answer);
    if ((typeof +answer) !== 'number') {
        console.log('wrong type')
        rl.close();
        return;
    }	

    for (let i = 0; i < answer; i++) {
        console.log(SPACE_S.repeat(answer - i) + SHARP_S.repeat(i + 2));
    }

    rl.close();
});
