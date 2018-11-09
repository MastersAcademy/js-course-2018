function check(str) {
    const reverseStr = [...str].reverse().join('');
    return str === reverseStr;
}

function rangePalindromes(options) {
    const result = [];
    for (let currentValue = options.start; currentValue <= options.end; currentValue++) {
        if (check(currentValue.toString())) {
            result.push(currentValue);
        }
    }
    return result;
}

module.exports = { check, rangePalindromes };
