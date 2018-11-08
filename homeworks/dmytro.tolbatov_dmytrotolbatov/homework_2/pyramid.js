const readline = require('readline');

const pyramidQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pyramidQuestion.question('How many storeys do you want for the pyramid?', (storeys) => {
    if (Number.isNaN(Number(storeys))) {
        console.log('Incorrect Input!');
    } else {
        const sign = '#';
        const emptySign = ' ';
        let startNumber = 4;

        for (let i = 0; i < storeys; i++) {
            console.log(emptySign.repeat(storeys - (i + 1)) + sign.repeat(startNumber));
            startNumber = startNumber + 2;
        }
    }

    pyramidQuestion.close();
});
