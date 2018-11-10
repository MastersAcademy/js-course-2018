for (let number = (500); number <= (1000); number++) {
    let num = number.toString();
    let a = num[0];
    let b = num[1];
    let c = num[2];
    let chnum = c+b+a;
    if (chnum === number.toString())
    	console.log(number)    
}