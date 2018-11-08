for (let number = (500); number <= (1000); number++) {
    if (number.toString().split('').reverse().join('') == number.toString()) {
        console.log(number);
    }
}