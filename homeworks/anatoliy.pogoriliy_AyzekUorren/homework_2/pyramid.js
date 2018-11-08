'use strict';

function buildSting(sourceString, size, additionalSymbol){
    sourceString += additionalSymbol.toString().repeat(size);
    return sourceString;
}

function Pyramid(size = 0) {
    let result = '';
    let blocks = '####';
    if (size === 0) {
        return null;
    }
    else if (size === 1) {
        return blocks;
    }
    let bloksSize = 0;
    for (let i = size; i !== 0; i--) {
        if(i !== size) result += '\n';
        result += buildSting('', i - 1, '\xa0');
        result += buildSting('####', bloksSize, '#');
        result += buildSting('', i - 1, '\xa0');
        bloksSize += 2;
    }
    return result;
}


module.exports = Pyramid;

