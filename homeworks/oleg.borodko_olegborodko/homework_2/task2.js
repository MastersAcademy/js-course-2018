for (var i=500; i<=1000; i++){
    let number_to_string = i.toString();
    if (number_to_string[number_to_string.length-1] === number_to_string[0]){
        console.log(number_to_string);
    }
}