function arraySum() {
    let result = 0;
    const toCount = function letsCount(numeric) {
        if (typeof numeric === 'number') {
            result += numeric;
            return result;
        }

        return false;
    };

    return toCount;
}


const increment = arraySum();
const startArray = [4, -1, 3, 8, 0];

const resultArray = startArray.map(numeric => increment(numeric));

console.log(resultArray);
