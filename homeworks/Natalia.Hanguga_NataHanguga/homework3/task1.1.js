function squareNum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(Math.pow(args[i]));
    }
}
const first = 5;
const second = 15;
const third = 53;
squareNum(first, second, third);
