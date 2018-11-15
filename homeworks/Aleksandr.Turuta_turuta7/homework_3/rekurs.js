function sqr(i){
    for (let j=0;;j++){
        let a = Math.pow(2,j);
        if (a>i) {return};
        console.log(a);
    }
}

//Get the number from the console
let readline = require('readline');
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Введите количество символов (от 1 до 1000000000): ", function(num) {
    sqr(num);
    r1.close();
});



