const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let filterNumbers = function() {
    rl.question('Enter Min and Max values of array (Example: min,max): ', function(values) {
        let arrayOfValues = values.split(',');
        let parsedMin = parseInt(arrayOfValues[0]);
        let parsedMax = parseInt(arrayOfValues[1]);
        if((typeof(parsedMin) === 'number' && parsedMin % 1 === 0) && (typeof(parsedMax) === 'number' && parsedMax % 1 === 0)) {
            let minValue = parsedMin;
            let maxValue = parsedMax;
            let array = [];
            let sortedArray = [];
            for(let i = minValue; i <= maxValue; i++) {
                array.push(i);
            }
            array.forEach(e => {
                let stringify = e.toString();
                let splited = stringify.split('');
                let tempArray = [];
                splited.forEach(el => {
                    tempArray.unshift(el);
                    let specularArray = tempArray.join('');
                    if(specularArray === stringify) {
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
};
filterNumbers();