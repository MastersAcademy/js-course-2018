function buildSting(sourceString, size, additionalSymbol) {
    const repeatedSymbols = additionalSymbol.toString().repeat(size);
    const result = sourceString + repeatedSymbols;
    return result;
}

function pyramid(size = 0) {
    let result = '';
    const blocks = '####';
    if (size === 0) {
        return null;
    }
    if (size === 1) {
        return blocks;
    }
    let bloksSize = 0;
    for (let i = size; i !== 0; i--) {
        if (i !== size) result += '\n';
        result += buildSting('', i - 1, '\xa0');
        result += buildSting('####', bloksSize, '#');
        result += buildSting('', i - 1, '\xa0');
        bloksSize += 2;
    }
    return result;
}


module.exports = pyramid;
