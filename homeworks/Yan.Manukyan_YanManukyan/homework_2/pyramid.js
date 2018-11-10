var space = ' ';
var readline = require('readline');
var str = "####";
var j = 14;
for(var i = 0; i < 15; i++){
    console.log(space.repeat(j) + str);
    str+= "##";
    j--;
}