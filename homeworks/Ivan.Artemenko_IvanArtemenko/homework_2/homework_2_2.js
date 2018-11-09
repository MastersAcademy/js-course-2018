for (var i = 500; i<1000; i++){
	var a, b, c;
	a = ((i/100)%10);
	b = ((i/10)%10);
	c = (i%10);
	if(Math.floor(a) == Math.round(c)){
		console.log(Math.floor(a),Math.floor(b),c)
	}
}