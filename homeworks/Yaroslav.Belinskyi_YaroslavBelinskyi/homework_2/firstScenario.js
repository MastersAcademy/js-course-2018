var initialStroke = '##';
var pyramidHeight = 15;
var space = ' ';
for(var i = 2; i <= pyramidHeight + 1; i++) {
    var stroke = initialStroke.repeat(i);
    var amountOfSpace = ((pyramidHeight * 2 - 2) - stroke.length) / 2
    var spaceBefore = space.repeat(amountOfSpace); 
    console.log(`${spaceBefore}${stroke}`)
};
