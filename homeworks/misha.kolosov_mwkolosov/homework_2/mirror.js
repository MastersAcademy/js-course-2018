for (let i = 500; i < 1000; i++) {
    // split().reverse().join();
    const reverse = (i.toString().split('').reverse().join(''));
    if (i === reverse) {
        console.log(i);
    }
}
