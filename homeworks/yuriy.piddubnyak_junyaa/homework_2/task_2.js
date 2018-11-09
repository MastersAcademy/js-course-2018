var s = 500;
var e = 1000;
var x;
var i;
var z;

for (x = s; x<=e; x++){
	for (i = s; i<=e; i++){

if ((x.toString().split('').reverse().join('')) == i){
	
	
	console.log('Перевертыш: '+x, '-',i)
	console.log('Палиндром:',x%i == 0,i);
	}
	
			
	}
	
}