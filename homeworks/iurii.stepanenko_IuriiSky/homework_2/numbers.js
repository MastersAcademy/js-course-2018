for (let i = 500; i < 1000; i++) {

    const iString = i.toString();
    const length = iString.length;
    const first = iString.charAt(0);
    const last = iString.charAt(length-1);

    if (first === last) {
        console.log(iString);

    }
    
}   
