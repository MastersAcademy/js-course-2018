for (let i = 500; i <= 1000; i++) {
    const reversedNumber = i.toString().split('').reverse().join('');
    if (reversedNumber === i.toString()) {
        console.log(reversedNumber);
    }
}
