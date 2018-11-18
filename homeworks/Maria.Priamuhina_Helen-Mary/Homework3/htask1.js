const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 /*task1.1*/
function Square (num) {
      return num * num;
  }
  
  rl.on('line', (input) => {
    const num = input;
  rl.close();
  console.log(Square(num));
  });

  /*task 1.2*/
function CreateArray (end, step) {
  var array = [0];
  end = Number(end);
  step = Number(step);
  let temp = 0;
  for (let i = 1; (temp + step) <= end; i++) {
    array[i] = temp + step;
    temp += step;
  }
  for (let i = 0; i < array.length; i++)
    console.log(array[i]);
  return array;
}
rl.on('line', (input) => {
  const temp = input.split(' ');
  const end = temp[0];
  const step = temp[1];
rl.close();
var arr = CreateArray(end, step);
console.log("\n");
Square_Array(arr);
});

/*task 1.3*/
function Square_Array(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Square(array[i]);
    console.log(array[i]);
  }
  console.log("\n");
  Sum_of_Elems(array);
}

/*task 1.4*/
function Sum_of_Elems(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
