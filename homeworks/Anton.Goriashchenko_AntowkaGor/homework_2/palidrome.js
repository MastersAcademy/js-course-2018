for (let i = 500; i <= 1000; i++) {
    const checkPalindrome = i.toString().split('').reverse().join('');
    const checkNumber = i.toString();
    if (checkNumber === checkPalindrome) {
        console.log(`${checkNumber} is a Palidrome`);
    }
}
