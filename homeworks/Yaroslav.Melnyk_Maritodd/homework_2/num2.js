const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

    function numbers(x){
        for(let i = 1; i <= x; i++){
            var str = String(i);
            if(x > 1000){
            console.log("Error!")
            return;
        }
            if(str.length === 3){
                if(str[0] === str[2])
                console.log(str);
            }
        }
            if(str.length === 4){
                if(str[0] === str[3] && str[1] === str[2]){
                console.log(str);
                }
            }
        }
rl.question('Enter number from 500 to 1000: ', (x) => {
numbers(x);
rl.close();
})