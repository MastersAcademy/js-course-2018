const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter min and max values separated by a space ', (answer) => {
  answer = answer.split(' ')
  
  if ((typeof +answer[0]) != 'number' || (typeof +answer[1]) != 'number') {
    console.log('wrong type')
    rl.close();
    return;
  }
    	
  for (let i = answer[0]; i < answer[1]; i++) {
    i += '';
    let mirror = true;

    for (let j = 0; j < i.length / 2; j++) {
      if (i[j] !== i[i.length - 1 - j]) {
          mirror = false;
      }
    }

    if (mirror === true) {
      console.log(i);
    }
  }
  rl.close();
});
