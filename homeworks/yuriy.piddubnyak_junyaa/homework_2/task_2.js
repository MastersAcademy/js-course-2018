var s = 500;
var e = 1000;
var x;
var i;

console.log('Палиндромы от',s,'до',e);
for (x = s; x<=e; x++){
    for (i = s; i<=e; i++){
        if ((x.toString().split('').reverse().join('')) == i){
            if(x%i == 0){
                console.log(i);
            }
        }
    }
}