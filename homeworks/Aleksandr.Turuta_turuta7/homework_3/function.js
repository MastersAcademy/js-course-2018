
function sq(n){    
    let x=Math.pow(n,2);
    return (x);
}


function arrNew(p,x){
    let arr = [];
    let arr2 = [];
    for (i=0;i<=p;i=i+x){
        arr.push(i);
    }
      
    for (j=0;j<arr.length;j++){
        arr2[j]=Math.pow (arr[j],2);}

    console.log(arr);
    console.log(arr2);
    console.log(arr2.reduce(function(a, b) {return a + b;}))
             
}
//1.1
console.log(sq(53));
//1.2 1.3 1.4
arrNew(32,4);





//arrNew(32,4);
