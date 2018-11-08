function Pyramid(hight) {
    for (let number = 1; number < hight; number++) {
        let str = ' ';
        for (let indentLeft = 1; indentLeft < hight-number; indentLeft++) {
            str += ' ';
        }
        for (let indentTop = 0; indentTop <= number; indentTop++) {
            str += '##';
        }
        console.log(str);
    }
}
Pyramid(15); 