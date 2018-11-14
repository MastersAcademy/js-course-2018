const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter min and max values separated by a space ', (answer) => {
    const values = answer.split(' ');
    if ((typeof +values[0]) !== 'number' || (typeof +values[1]) !== 'number') {
        console.log('wrong type');
        rl.close();
        return;
    }

    for (let i = values[0]; i < values[1]; i += 1) {
        i += '';
        let mirror = true;

        for (let j = 0; j < i.length / 2; j += 1) {
            if (i[j] !== i[i.length - 1 - j]) {
                mirror = false;
            }
        }

        if (mirror === true) {
            console.log(i);
        }
    }
    rl.close();
});
