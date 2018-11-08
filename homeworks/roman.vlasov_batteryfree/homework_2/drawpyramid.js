const readline = require('readline');
const readconsole = readline.createInterface(process.stdin, process.stdout);
readconsole.question('Enter the height of the pyramid:',function(answer){
  drawpyrapid(answer);
  readconsole.close();
});
function drawpyrapid(hpyramid){
  let s=' ', s1='#';
  for (let i=1; i<=hpyramid; i++){
    console.log(s.repeat(hpyramid-i)+s1.repeat(2*i+2));
  }
}

