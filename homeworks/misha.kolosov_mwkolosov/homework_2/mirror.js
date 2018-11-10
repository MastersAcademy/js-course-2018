for (let i = 500; i < 1000; i++) {
    // split().reverse().join();
    let reverse_num = (i.toString().split('').reverse().join(''));
    if (i == reverse_num) {
        console.log(i);
    }
}