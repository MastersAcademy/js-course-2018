for (let i = 500; i < 1000; i++){

    let iString = i.toString();
    let length = iString.length;
    let first = iString.charAt(0);
    let last = iString.charAt(length-1);

    if (first === last){
        console.log(iString);
    }
}