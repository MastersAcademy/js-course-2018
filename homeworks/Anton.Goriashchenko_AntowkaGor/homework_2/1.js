for (let i=500; i<=1000; i++){
    const check_palindrome = i.toString().split('').reverse().join('');
    const check_number = i.toString();
    if (check_number === check_palindrome){
        console.log(check_number + ' is a palidrom');
    };
};