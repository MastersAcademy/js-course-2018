const isPalindrome = (s) => {
    const symbols = s.split('');

    while (symbols.length > 1) {
        if (symbols.pop() !== symbols.shift()) {
            return false;
        }
    }
    return true;
};

for (let i = 500; i < 1000; i++) {
    const string = i.toString();
    if (isPalindrome(string)) {
        console.log(i);
    }
}
