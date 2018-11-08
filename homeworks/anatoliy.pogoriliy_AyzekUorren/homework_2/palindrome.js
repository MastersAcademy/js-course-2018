'use strict';

function check(str){
    const reverseStr = [...str].reverse().join('');
    return str === reverseStr;
}

function RangePalindromes(start, end){
    let result = [];
    for(let currentValue = start; currentValue < end; currentValue++){
        if(check(currentValue.toString())){
            result.push(currentValue);
        }
    }
    return result;
}

module.exports = { check, RangePalindromes };