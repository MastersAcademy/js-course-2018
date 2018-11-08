var s = 500;
var e = 1000;
var x;
var i;

for (x = s; x<=e ; x++){
	for (i = s; i<=e; i++){

if ((x.toString().split('').reverse().join('')) == i){
	console.log("Палиндромы: "+x, "-",i)
	}
	}
	
}