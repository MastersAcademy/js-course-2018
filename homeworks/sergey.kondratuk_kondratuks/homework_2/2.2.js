for (let i = 500; i <= 1000; i++) {
    const numPal = i.toString().split('').reverse().join('');
    if (numPal === i.toString()) {
        console.log(numPal);
    }
}
