var i = 2, j = 0;
var max = 17;
var space = "",
    sharp = "";

while (i < max) {
    space = "";
    sharp = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i; j++) sharp += "#";
    console.log(space + sharp);
    i++;
}