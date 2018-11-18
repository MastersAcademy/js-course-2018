function func(minNum, maxNum) {
    function rec(num) {
        if (num === 2) {
            return true;
        } if (num > 2) {
            return rec(num / 2);
        }
        return false;
    }
    const max = maxNum;
    for (let min = minNum; min <= max; min++) {
        if (rec(min) === true) {
            console.log(min);
        }
    }
}

func(10, 600);
