for (let i = 500; i < 1000; i++) {
    // split().reverse().join();
    const reverse = i.toString().split('').reverse().join('');
    if (i.toString() === reverse) {
        console.log(i);
    }
}
