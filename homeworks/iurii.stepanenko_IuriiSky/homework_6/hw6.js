// user = { fullName, phone };

function name(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const str = 'iURII-sTEPANENKO anATolich';

console.log(str
    .split('').map(element => name(element)).join('')
    .split('-')
    .map(element => name(element))
    .join('-'));

// console.log(str);
// const arr = str.split(' ');
// console.log(arr);
// const arrNorm = arr.map(e => name(e));
// console.log(arrNorm);
// const arrFin = arrNorm.join(' ');
// console.log(arrFin);


// task2

// function numPhone(numstr) {
//     if (numstr[0] === '+') {
//         return `+${numstr.split(/\D/).join('')}`;
//     }
//     return numstr.split(/\D/).join('');
// }
// console.log(numPhone('hd5696+4*4ds'));
