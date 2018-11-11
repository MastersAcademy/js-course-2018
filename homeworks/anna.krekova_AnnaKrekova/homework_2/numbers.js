for (let number = (500); number <= (1000); ++number) {
    const checkNumber = number.toString().split('').reverse().join('');
    const checkOnline = number.toString();
    if(checkNumber === checkOnline) {
        console.log(number);
    }
}