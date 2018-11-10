// Number function
for (let n = 500; n < 1000; n++) {
    const str = n.toString();
    const reverse = str.split('').reverse().join('');
    if (str === reverse) {
        console.log(n);
    }
}
