var readline = require('readline-sync');
var min_number = readline.question('Indicate min number: ');
var max_number = readline.question('Indicate max number: ');
diapason(min_number,max_number);
//palindrome(min_number)
function diapason(value1,value2){
    for (i = value1; i<= value2; i++) {
        var checkPalindrome = i.toString().split('').reverse().join('');
        const checkNumber = i.toString();
        if(checkNumber === checkPalindrome){
            console.log(checkNumber + ' is a Palindrome');
        } 
    }
}
//type node palidrome.js