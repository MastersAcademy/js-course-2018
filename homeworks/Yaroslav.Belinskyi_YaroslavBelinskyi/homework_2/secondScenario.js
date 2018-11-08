const READLINE = require('readline');
const rl = READLINE.createInterface(process.stdin, process.stdout);

rl.question('Enter Min and Max values of array: ', function(min, max) {

    let parsedMin = parseInt(min);
    let parsedMax = parseInt(max);
    if((typeof(parsedMin) === 'number' && parsedMin % 1 === 0) && (typeof(parsedMax) === 'number' && parsedMax % 1 === 0)) {
        let minValue = min;
        let maxValue = max;
        let array = [];
        let sortedArray = [];
        for(let i = minValue; i <= maxValue; i++) {
            array.push(i);
        }
        array.forEach(e => {
            var stringify = e.toString();
            var splited = stringify.split('');
            var tempArray = [];
            splited.forEach(el => {
                tempArray.unshift(el);
                var specularArray = tempArray.join('');
                if(specularArray === stringify) {
                    sortedArray.push(specularArray);
                };
            });
        });
        console.log(sortedArray);
        process.exit();
    } else {
        console.log('Please enter only intengers')
    };   
    
});