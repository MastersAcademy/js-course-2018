let i = 0;
for (i = 500; i < 1000; i++) {
    const numbers = i;
    const newArray = numbers.toString(); // create an array and translate it into a string
    const splitArray = newArray.split(''); // break elements of an array
    if (splitArray[0] === splitArray[2]) {
        console.log(splitArray.join(''));
    }
}
