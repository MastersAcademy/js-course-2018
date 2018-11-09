const readline = require('readline');
const readconsole = readline.createInterface(process.stdin, process.stdout);
readconsole.question('Enter the height of the pyramid:', answer => {
    const s = ' ', s1 = '#';
    for (let i = 1; i <= answer; i++) {
        console.log(s.repeat(answer - i) + s1.repeat(2 * i + 2));
    }
    readconsole.close();
});
