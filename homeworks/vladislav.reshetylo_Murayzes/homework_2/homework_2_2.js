
for(i = 500; i < 1000; i++){
    let numbers = i;
    newArrey = numbers.toString();  // create an array and translate it into a string
    splitArrey = newArrey.split('');    // break elements of an array 
    if (splitArrey[0] == splitArrey[2]){
        console.log(splitArrey);
    }
}
