const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function filterNumbers() {
    rl.question('Enter Min and Max values of array (Example: min,max): ', (values) => {
        const arrayOfValues = values.split(',');
        const parsedMin = parseInt(arrayOfValues[0], 10);
        const parsedMax = parseInt(arrayOfValues[1], 10);
        if ((typeof (parsedMin) === 'number' && parsedMin % 1 === 0) && (typeof (parsedMax) === 'number' && parsedMax % 1 === 0)) {
            const minValue = parsedMin;
            const maxValue = parsedMax;
            const array = [];
            const sortedArray = [];
            for (let i = minValue; i <= maxValue; i++) {
                array.push(i);
            }
            array.forEach((e) => {
                const stringify = e.toString();
                const splited = stringify.split('');
                const tempArray = [];
                splited.forEach((el) => {
                    tempArray.unshift(el);
                    const specularArray = tempArray.join('');
                    if (specularArray === stringify) {
                        sortedArray.push(specularArray);
                    }
                });
            });
            console.log(sortedArray);
            process.exit();
        } else {
            console.log('Please enter only intengers');
            filterNumbers();
        }
    });
}
filterNumbers();
