let readline = require('readline');
let n = readline.createInterface(process.stdin, process.stdout);
n.question('Please enter a rows of your pyramid: ', (n) => { 
    if(isNaN(n)){
        console.log(n + ' is not a number');
    }else{
        for(let i=1; i<= n; i++){
            let str = ' '.repeat(n-i);
            let str2 = '#'. repeat(i*2+2);
   
            console.log(str + str2 + str);
        }  
    }
});
