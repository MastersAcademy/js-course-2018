function copy(h1, h2) {
    let len;
    for (let i = h1; i <= h2; i++) {
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
copy(500, 1000);
