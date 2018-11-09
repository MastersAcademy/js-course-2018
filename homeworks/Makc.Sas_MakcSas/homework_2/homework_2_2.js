for (let number = (500); number <= (1000); number++) {
    const checkNumber = number.toString().split('').reverse().join('');
    const checkOnLine = number.toString(); 
    if (checkNumber === checkOnLine) {
        console.log(number);
    }
}