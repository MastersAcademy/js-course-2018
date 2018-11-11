let readline = require('readline-sync');

let start = readline.question('Type a start number: ');
let end = readline.question('Type an end number: ');

//валидация
if(!isNumeric(start) || !isNumeric(end) || end < start || start < 0){
    console.log('Bad arguments!');
    process.exit(-1);
}

let left, center, right;
//перебор
for(let i = start; i < end; i++){
    //делим число на две равные части. если кол-во цифр в числе не четное, 
    //то цифру по середине выкидываем в center переменную
    let iLength = i.toString().length;
    center = (iLength % 2 !== 0) ? i.toString().charAt(~~(iLength / 2)) : '';
    left = (i.toString()).slice(0, Math.floor(iLength / 2));
    right = (i.toString()).slice(Math.round(iLength / 2, iLength));
    //проверяем, есть ли число числом-полиндромом
    if(isPoly(left, right))
        console.log(left + center +right);
}

function isPoly(left, right){
    let length = left.toString().length;
    let equalMatches = 0;
    //сравниваем левю и правую часть зеркально порозрядно. 
    for(let i = 0; i < length; i++){
        if(left[i] === right[length - i - 1])
            equalMatches++;
    }
    //если кол-во совпавших разрядов равно количеству розрядов - это число-полином.
    return equalMatches === length ? true : false;
}
function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}