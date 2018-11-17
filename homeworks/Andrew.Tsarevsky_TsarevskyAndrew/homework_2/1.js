function getPyram(height) {
    for (let i = 0; i < height; i++) {
        let str = ' ';
        for (let before = 1; before < height - i; before++) {
            str += ' ';
        }
        for (let char = 0; char <= i; char++) {
            str += '##';
        }
        console.log(str);
    }
}
getPyram(15);
