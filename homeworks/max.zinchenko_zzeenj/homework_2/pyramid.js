var readline = require('readline');
var n = readline.createInterface(process.stdin, process.stdout);
n.question("rows of your pyramid: ", function pyramid(n) { 
  if(isNaN(n)){
    console.log(n + " is a not number");
    }else{
    for(let i=1; i<= n; i++){
      let str = ' '.repeat(n-i);
      let str2 = '#'. repeat(i*2+2)
   
      console.log(str + str2 + str);
    }  
   }
})
