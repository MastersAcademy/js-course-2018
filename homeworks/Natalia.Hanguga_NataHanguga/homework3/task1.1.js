function squareNum(...args) {
    for (let i = 0; i < args.length; i++) {
       return Math.pow(args[i]);
    }
}
const first = 5;
const second = 15;
const third = 53;
console.log(squareNum(first, second, third));
