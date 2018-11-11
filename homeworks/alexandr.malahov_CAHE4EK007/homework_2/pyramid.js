const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getPyramid = (height) => {
    let i = 2;
    let j;
    for (j = height; j >= 1; j--){
        i = i + 2;
        console.log(`${' '.repeat(j)}${'#'.repeat(i)}`);
    }
};

checkPyramidHeight = (height) => {
    return typeof height !== 'number' || height === 0 || height > 50;
};

rl.question('Enter height pyramid: ', (number) => {
    if (checkPyramidHeight(number))
        console.log('Sorry your answer is not correct');
        rl.close();

    getPyramid(number);
    rl.close();
});
