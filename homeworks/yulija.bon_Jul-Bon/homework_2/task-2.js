let number = 500;
while (number < 1000) {
    number++;
    const numberToString = number.toString();
    if (numberToString.charAt(0) === numberToString.charAt(2)) {
        console.log(numberToString);
    }
}
