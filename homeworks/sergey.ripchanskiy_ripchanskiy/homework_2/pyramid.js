var readline = require('readline-sync');
var pyramid_height = readline.question('Indicate pyramid height: ');

function validation() {
    if (pyramid_height<1||pyramid_height>50||pyramid_height===0) {    
        console.log('use number beetween 1-50');
    } else {
        pyramid();
    }
}

function pyramid () {
    var space = pyramid_height;
    var height = 4;
    for (i = 1; i<= pyramid_height; i++) {
        console.log(' '.repeat(space) + '#'.repeat(height));
        height +=2;
        space -=1;
    }
}
validation()
//node pyramid.js