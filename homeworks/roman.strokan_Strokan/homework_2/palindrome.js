function palindrome(val1, val2) {
    let len;
    for (let i = val1; i <= val2; i++) {
        i += '';
        len = i.length;
        let a = true;
        for (let j = 0; j < len / 2; j++) {
            if (i[j] !== i[len - j - 1]) {
                a = false;
            }
        }
        if (a === true) {
            console.log(i);
        }
    }
}
palindrome(1000, 1500);
