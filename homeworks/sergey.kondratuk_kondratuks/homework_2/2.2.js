// eslint-disable-next-line no-undef
for (i = 500; i <= 1000; i++) {
    // eslint-disable-next-line no-undef
    const numPal = i.toString().split('').reverse().join('');
    // eslint-disable-next-line no-undef
    if (numPal === i.toString()) {
        console.log(numPal);
    }
}
