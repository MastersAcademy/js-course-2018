let minValue = 500;
let maxValue = 1000;
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
