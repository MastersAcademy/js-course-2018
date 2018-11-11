for (let i = 500; i < 1000; i++) {
    const Palindrome = i.toString();

    const first = Palindrome.charAt(0);
    const last = Palindrome.charAt(2);

    if (first === last) {
        console.log(Palindrome);
    }
}
