var i = 0, j = 0;
var lines = 15;
var space = "", sharp = "";

while (i < lines) {
    space = "";
    sharp = "###";
    for (j = 0; j < lines - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1;j++) sharp += "#";
    i++;
    console.log(space + sharp);
   }
