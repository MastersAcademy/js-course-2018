
for(i = 500; i < 1000; i++){
    let numbers = i;
    newArray = numbers.toString();  // create an array and translate it into a string
    splitArray = newArray.split('');    // break elements of an array 
    if (splitArray[0] == splitArray[2]){
        console.log(splitArray.join(''));
    }
}
