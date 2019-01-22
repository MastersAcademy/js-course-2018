for (let i = 500; i < 1000; i++) {
    if (i.toString() === i.toString().split('').reverse().join('')) {
        console.log(i);
    }
}
