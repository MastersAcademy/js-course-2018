
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question('Enter begin: ', (begin) => {
    if(isNaN( parseInt(begin))){
        console.log('Wrong input! Input a number, please!');
        r1.close();
        return;
    }
    r1.question('Enter end: ', (end) => {
        if(isNaN( parseInt(end))){
            console.log('Wrong input! Input a number, please!');
            r1.close();
            return;
        }
        r1.close();    
        
        let num;
        let numberLength; 
        for (i = parseInt(begin); i <= parseInt(end); i++){
            num = i;
            numberLength = num.toString().length-1;
            for(lastIndex = numberLength, firstIndex = 0; (lastIndex-firstIndex) >= 1; lastIndex--, firstIndex++ ){
                if( (num.toString()[lastIndex] === num.toString()[firstIndex]) ){
                    if ( ((lastIndex-firstIndex) === 1) || ((lastIndex-firstIndex) === 2) )
                    {
                        console.log(num);
                    }            
                    continue;
                }
                else break;
            }
        }
    });
});