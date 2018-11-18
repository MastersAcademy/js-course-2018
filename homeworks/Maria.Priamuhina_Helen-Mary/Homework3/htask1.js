const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* task1.1 */
function Square(num) {
  return num * num;
}

rl.on('line', (input) => {
  const num = input;
  rl.close();
  console.log(Square(num));
});

/* task 1.2 */
function CreateArray(end, step) {
  const array = [0];
  const newEnd = Number(end);
  const newStep = Number(step);
  let temp = 0;
  for (let i = 1; (temp + newStep) <= newEnd; i += 1) {
    array[i] = temp + newStep;
    temp += newStep;
  }
  for (let i = 0; i < array.length; i += 1) { console.log(array[i]); }
  return array;
}

/* task 1.4 */
function SumOfElems(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  console.log(sum);
}
/* task 1.3 */
function SquareArray(array) {
  for (let i = 0; i < array.length; i += 1) {
    const temp = Square(array[i]);
    // eslint-disable-next-line no-param-reassign
    array[i] = temp;
    console.log(array[i]);
  }
  console.log('\n');
  SumOfElems(array);
}
rl.on('line', (input) => {
  const temp = input.split(' ');
  const end = temp[0];
  const step = temp[1];
  rl.close();
  const arr = CreateArray(end, step);
  console.log('\n');
  SquareArray(arr);
});
