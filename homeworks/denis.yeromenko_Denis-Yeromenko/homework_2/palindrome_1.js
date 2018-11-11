for(i = 500; i <= 1000; i++){
    let str = i.toString();

let palind = str.split('').reverse().join('');
if (str == palind){
console.log(palind);
};
};