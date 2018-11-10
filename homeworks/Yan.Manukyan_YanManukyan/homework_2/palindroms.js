var a = 500;
var b = 1000;
//a = a.toString();
//b = b.toString();;
for(var i = a; i < b; i++){
    if (i.toString() == reverse(i.toString())){
        console.log(i);
    }
}
function reverse(str){
    let reversed = "";
    for(var i = str.length -1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}