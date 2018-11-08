var pyramid_length = 15; //from 1 to n
var pyramid_offset = 2; //from -1 to n
var pyramid_length_plus_offset = pyramid_length + pyramid_offset;

for (var i=1+pyramid_offset; i<=pyramid_length_plus_offset; i++){
    console.log(' '.repeat(pyramid_length_plus_offset - i) + '#'.repeat(i) + '#'.repeat(i - pyramid_offset));
    //console.log(`${' '}`);
}