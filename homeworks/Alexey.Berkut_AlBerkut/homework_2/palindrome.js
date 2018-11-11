function checkPl(str) {
    return(str === str.split('').reverse().join(''));
}

for(i = 500; i < 1000; i++){
    x = String(i);
    if(checkPl(x) === true){
        console.log(x);
    }
}