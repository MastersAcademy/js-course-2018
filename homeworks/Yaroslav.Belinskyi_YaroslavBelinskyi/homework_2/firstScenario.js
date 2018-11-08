const READLINE = require('readline');
const rl = READLINE.createInterface(process.stdin, process.stdout);

rl.question('Enter the height of pyramid: ', function(height) {
    
    let parsed = parseInt(height);
    
    if(typeof(parsed) === 'number' && height % 1 === 0) {
        var initialStroke = '##';
        var pyramidHeight = height;
        var space = ' ';
        for(var i = 2; i <= pyramidHeight + 1; i++) {
            var stroke = initialStroke.repeat(i);
            var amountOfSpace = ((pyramidHeight * 2 + 2) - stroke.length) / 2;
            var spaceBefore = space.repeat(amountOfSpace); 
            console.log(`${spaceBefore}${stroke}`);
        };
        console.log('Here you are!');
        process.exit();
    } else {
        rl.setPrompt('Please enter only intengers: ');
        rl.prompt();
        rl.on('line', function() {

        });
    };

});


