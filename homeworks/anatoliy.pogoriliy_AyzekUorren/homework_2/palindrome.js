function check(str) {
    const reverseStr = [...str].reverse().join('');
    return str === reverseStr;
}

function rangePalindromes(start, end) {
    const result = [];
    for (let currentValue = start; currentValue <= end; currentValue++) {
        if (check(currentValue.toString())) {
            result.push(currentValue);
        }
    }
    return result;
}

module.exports = { check, rangePalindromes };
