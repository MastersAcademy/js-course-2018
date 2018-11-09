
for ( i = 500; i <= 1000; i++) {
    let palindroms = i.toString().split('').reverse().join('');
        if (palindroms === i.toString()) {
            console.log(palindroms);    
    }
    
}


