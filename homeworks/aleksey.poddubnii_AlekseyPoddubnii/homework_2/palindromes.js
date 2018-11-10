const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Get max value from terminal, begin from 500
rl.question('Please enter the max value of polidroms : ', (answer) => {
    // Declarate variables
    let i;
    const polindroms = [];
    if (answer <= 1000) {
        for (i = (500); i <= (+answer); i++) {
            // Method from MDN docs
            if (i.toString().split('').reverse().join('') === i.toString()) {
                polindroms.push(i);
            }
            // If polydroms true add to const polindrom above
        }
        console.log(polindroms);
    }
    rl.close();
});
