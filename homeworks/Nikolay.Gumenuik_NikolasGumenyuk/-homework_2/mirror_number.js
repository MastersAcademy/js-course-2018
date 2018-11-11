const readline = require('readline-sync');
const min = readline.question("What is your min value?");
const max = readline.question("What is your max value?");
    console.log(max, min);
    var num;
    var x, y, z;
    for (var i = min; i<max; i++){
        num = i;
        String(num);
        x = num.toString().slice(0, 1);
        y = num.toString().slice(1, 2);
        z = num.toString().slice(2, 3);
        if ((x === y && y === z) || x === z){
            console.log(x + y + z);
        }
    }