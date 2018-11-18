// 1.1
function kv(){
    var a = 5, b = 15, c = 53;
    kvadrat1 = Math.pow(a, 2);
    kvadrat2 = Math.pow(b, 2);
    kvadrat3 = Math.pow(c, 2);
    console.log("a ^ 2 = " + kvadrat1 + '\n' + "b ^ 2 = " + kvadrat2 + '\n' + "c ^ 2 = " + kvadrat3);
}
kv();

   //1.2 
function creatArr(max, step){
    const arr = [];
    for (let i = 0; i <= max; i += step){
        arr.push(i);
        

    } 
    return arr;

}
console.log(creatArr(50, 5));
console.log(creatArr(32, 4));


//1.3
function creatArr(max, step){
    const arr = [];
    for (let i = 0; i <= max; i += step){
        arr.push(Math.pow(i , 2));
    } 
    return arr;
}
console.log(creatArr(32, 4));*/

/*
function rec(){
    for (let i = 10; i<= 600; i++ ){
        
       }

}

rec();



