for (let mirrornum = 500; mirrornum < 1000; mirrornum++) {
    const str = mirrornum.toString();
    const reverse = str.split('').reverse().join('');
    if (str === reverse) {
        console.log(mirrornum);
    }
}
