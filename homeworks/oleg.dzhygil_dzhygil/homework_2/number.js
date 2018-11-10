for (let i = 500; i < 1000; i++) {
    const str = i.toString();
    const reverse = str.split('').reverse().join('');
    if (str === reverse) {
        console.log(i);
    }
}
