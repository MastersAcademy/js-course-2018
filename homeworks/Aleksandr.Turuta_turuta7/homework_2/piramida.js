//Get the number from the console
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ввкдите количкство строк (до 50шт.): ', function(num) {
    func (num);
    rl.close();
});

//Pyramid function
function func (num){
    var i=2;
    var bs = ' ';
    var str = '#';
    var j;
    if (num > 50) {
        console.log('Число больше 50');
        return;
    }
    for (j = num; j>=1; j--){
        i=i+2;
        console.log(bs.repeat(j)+str.repeat(i));
    }
}
