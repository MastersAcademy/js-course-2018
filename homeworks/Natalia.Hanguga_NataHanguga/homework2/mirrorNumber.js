function mirror() {
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    console.log(max, min);
    var num;
    var a, b, c;
    for (var i = min; i < max; i++) {
        num = i;
        String(num);
        // console.log(num);
        a = num.toString().slice(0, 1);
        //console.log(a);
        b = num.toString().slice(1, 2);
        //console.log(b);
        c = num.toString().slice(2, 3);
        //console.log(c);
        if ((a === b && b == c) || a === c) {
            document.write(a + b + c + '<br>');
        }
    }
}
document.getElementById('do').onclick = mirror;