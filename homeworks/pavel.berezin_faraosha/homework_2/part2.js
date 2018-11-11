for (i = 1000; i < 1500; i++) {
    // split().reverse().join();
    let reverse_num = (i.toString().split('').reverse().join(''));
    if (i == reverse_num) {
        console.log(i);
    }
}