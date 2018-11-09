let amountOfSharps = 4;
const readline = require('readline');
const enterheight = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function check(height) {
    return height.search(/^[\d]$/);
}

enterheight.question('Enter the height of pyramid: ', (height) => {
    enterheight.close();
    if (check(height) != -1) {
        for(let i=1; i <= height; i++){
            let str = ' '.repeat(height- i);
            let str2 = '#'. repeat(amountOfSharps);
            console.log(str + str2 + str);
            amountOfSharps += 2;
        }
    } else {
        console.log("Wrong input!")
    }
});



