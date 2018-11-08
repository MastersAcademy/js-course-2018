let readline = require('readline');
let readconsole = readline.createInterface(process.stdin, process.stdout);
readconsole.question('Enter the number #1(>=500):',function(answer){
  const num1 = +answer;
  readconsole.question('Enter the number #2(<number #1):',function(answer){
    const num2 = +answer;
    if (typeof(num1)==='number' && typeof(num2)==='number' && num1<num2 && num1>=500){
      palnum(num1,num2);
    }else{
      console.log('error data ;(');
    }
    readconsole.close();
  });
});
function palnum(i,j){
  for (i ; i<=j; i++){
    if (mirror(i.toString())){
      console.log(i);
    }
  }
}
function mirror(str){
  if (str===str.split('').reverse().join('')){
    return true;
  }
  else{
    return false;
  }
}