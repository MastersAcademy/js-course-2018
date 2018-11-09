function pyramidWithSymbols(height) {
    for (let number = 1; number < height; number++) {
        let str = ' ';
        for (let indentLeft = 1; indentLeft < height-number; indentLeft++) {
            str += ' ';
        }
        for (let indentTop = 0; indentTop <= number; indentTop++) {
            str += '##';
        }
        console.log(str);
    }
}
pyramidWithSymbols(15); 