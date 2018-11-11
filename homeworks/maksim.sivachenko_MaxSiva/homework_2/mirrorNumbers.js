function mirrorNumbers() {
    let str = '';
    for (let i = 0; i < 5; i++) {
        const first = (i + 5).toString();

        for (let n = 0; n < 10; n++) {
            const second = n.toString();
            const comma = (i === 0 && n === 0) ? '' : ',';
            str += comma + first + second + first;
        }
    }
    console.log(str);
}

mirrorNumbers();
