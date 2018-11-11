function draw() {
    var startWidth = 4;
    var height = document.getElementById('height').value;
    console.log(height);
    for (var i = 0; i < height; i++) {
        var a = height - 1 - i;
        for (var b = a; b > 0; b--) {
            document.write("*");
        }
        var c = (i * 2) + startWidth;
        for (var d = c; d > 0; d--) {
            document.write('#');
        }
        for (var b = a; b > 0; b--) {
            document.write("*");
        }
        document.write("<br>");
    }
}
document.getElementById('do').onclick = draw;