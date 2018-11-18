/*
1. Выводить в консоль пирамиду высотой в 15 строк, как на примере.
Верхняя часть должна состоять из 4 символов.
В этом вам помогут команды и методы: console.log и str.repeat().

       ####
      ######
     ########
    ##########
   ############
  ##############
 ################

***Было бы хорошо: запрашивать у пользователя высоту пирамиды, и валидировать его ввод.
В этом поможет: Readline и typeof.
*/

function pyramid(h) {
    const d = '#';
    const t = ' ';
    for (let i = 1; i <= h; i++) {
        console.log(t.repeat(h-i), d.repeat(2+2*i), t.repeat(h-i));
    }
    process.exit(0);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of pyramid height: ', (answer) => {
    rl.pause();
    let height = parseInt(answer);
    if (typeof(height) === 'undefined') {
        rl.resume();
    }
    pyramid(height);
});
