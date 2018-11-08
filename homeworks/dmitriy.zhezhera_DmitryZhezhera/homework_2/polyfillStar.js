const readline = require('readline');

const polyfill = (min, max) => {
    for (let i = Math.min(min, max), total = Math.max(min, max); i <= total; i++) {
        let curI = i.toString();
        let curReverseI = curI.split('').reverse().join('');
        if (curI === curReverseI) console.log(i);
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (name, rl) => () => new Promise(resolve => {
    rl.question(`Введите ${name}: `, resolve);
});

const answers = {
    min: '',
    max: ''
};

const setAnswer = name => answer => {
    answers[name] = parseInt(answer);
};

const askMin = question('min', rl);
const askMax = question('max', rl);

askMin()
    .then(setAnswer('min'))
    .then(askMax)
    .then(setAnswer('max'))
    .then(() => {
        polyfill(answers.min, answers.max);
        rl.close();
    });