var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please write a number from 1 to 70 and press 'Enter': ", function(inputValue) {
    pyramidRun(inputValue);
    rl.close();
});

// Get and paste inputValue from readline
function pyramidRun(inputValue) {
    // Declarate all variables
    var i = 2,
        space = " ",
        str = "#",
        s, i;
    if (inputValue <= 0) {
        console.log('Your number is lower or equal zero, lets begin from 1')
    } else if (inputValue > 70) {
        // Take a max value 70 points, because greater value render not beautiful pyramid at terminal.
        console.log("Sorry, your number is greater than 70, please numbers from 1 to 70.");
    } else if (inputValue.match(/^\d+$/)) {
        for (s = inputValue; s >= 1; s--) {
            //Start from two '#', and + 2 for get first value '####'
            i = i + 2;
            console.log(space.repeat(s) + str.repeat(i));
        }
    } else {
        console.log("Sorry, it's not a number, please try again.");
    }
}