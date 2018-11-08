const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Get max and min value from terminal
rl.question('Please enter the min value of polidroms: ', (answer1) => {
    rl.question('Please enter the max value of polidroms : ', (answer2) => {
        // Condition checks
        if (answer1 <= 0 || answer2 <= 0) {
            console.log("Min or Max value lower or equal 0, please give me number's from 500 to 1000");
        } else if (answer1 < 500 && answer2 > 1000) {
            console.log("Min or Max value does not match the desired value, please give me number's from 500 to 1000")
        } else if (answer1 < 500) {
            console.log('Min value must begin from 500')
        } else if (answer2 > 1000) {
            console.log("Max value can't be greater than 1000")
        } else if (answer1.match(/^\d+$/) && answer2.match(/^\d+$/)) {
            // If condition above passed, run this loop. Check is number polidrom, by revers number. If true, add to array 'var = polindroms'
            var polindroms = [];
            for (var i = (+answer1); i <= (+answer2); i++) {
                if (i.toString().split('').reverse().join('') === i.toString()) {
                    polindroms.push(i);
                }
            }
            // Render all of polidroms beetween our min and max value
            console.log("Hey, your number's are: " + polindroms)
        } else {
            console.log("Min or Max value can't be a text, only number's from 500 to 1000")
        };
        rl.close();
    });
});