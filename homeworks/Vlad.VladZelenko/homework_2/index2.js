const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.question('For example, enter the numbers 100, 1000 => ', (input) => {
    const [start, end] = input.split(', ').map(num => +num);
    for (let num = start; num <= end; num++) {
        // Так воно буде рахувати більше чим 1000, хоча в тех завданні від 500 до 1000, 
        // ну і виглядає воно вже не так оригінально, а більше як копіпаст, попередній варіант на 100% відпрацьовував тех. завдання
        if (num.toString().split('').reverse().join('') === num.toString()) {
            console.log(num);
        }
    }
    read.close();
});
