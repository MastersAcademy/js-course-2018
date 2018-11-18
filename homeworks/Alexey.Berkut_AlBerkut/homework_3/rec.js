function rec(num) {
    if (num === 2) {
        return true;
    } else if (num > 2) {
        return rec(num / 2);
    }
    return false;
}

function func(minNum, maxNum) {
    const max = maxNum;
    let min = minNum;
    for (min; min <= max; min++) {
        if (rec(min) === true) {
            console.log(min);
        }
    }
}

func(10, 600);
