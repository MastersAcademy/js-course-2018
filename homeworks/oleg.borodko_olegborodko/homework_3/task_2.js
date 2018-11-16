function degreeTwo(number) {
    let result = 2;

    if (typeof number !== 'number' || number < 0) {
        return false;
    }

    if (number === 0) {
        return 1;
    }

    for (let i = number; i >= 2; i--) {
        result *= 2;
    }

    return result;
}

function changeDegreeTwo(number) {
    if (typeof number !== 'number' || number <= 0) {
        return false;
    }

    if (number === 1 || number === 2) {
        return true;
    }

    return changeDegreeTwo(number / 2);
}

function test1() {
    for (let i = 10; i <= 600; i++) {
        if (changeDegreeTwo(i)) {
            console.log(i);
        }
    }
}

test1();

console.log('------test2');
const test2 = degreeTwo(31);
console.log(test2);
console.log(changeDegreeTwo(test2));
