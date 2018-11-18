// task 1.1

function squareNum(num) {
    return num * num;
}
console.log(`Square of 5 is: ${squareNum(5)}`);
console.log(`Square of 5 is: ${squareNum(15)}`);
console.log(`Square of 5 is: ${squareNum(53)}`);

// task 1.2

function arrWithStep(lastNum, step) {
    const result = [];
    for (let i = 0; i <= lastNum; i += step) {
        result.push(i);
    }
    return result;
}
console.log(`Last number is 50, step are 5: ${arrWithStep(50, 5)}`);
console.log(`Last number is 32, step are 4: ${arrWithStep(32, 4)}`);

// task 1.3

const arrSquareNum = arrWithStep(32, 4).map(squareNum);
console.log(`Square of all of the nums between 0 adn 32 with step 4 are: \n${arrSquareNum}`);

// task 1.4

const arrSum = arrSquareNum.reduce((sum, nextNum) => sum + nextNum);
console.log(`Array sum: ${arrSum}`);
