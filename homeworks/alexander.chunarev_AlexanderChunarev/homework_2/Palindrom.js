function checkPalindrom(str) {
    return str === str.split('').reverse().join('');
}
for (let i = 500; i <= 1000; i++) {
    if (checkPalindrom(i.toString())) {
        console.log(`The digit ${i} is palindrome`);
    }
}
