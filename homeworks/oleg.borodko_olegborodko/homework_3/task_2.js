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
