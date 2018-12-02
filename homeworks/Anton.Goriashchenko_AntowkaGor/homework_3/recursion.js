function numDegree(n) {
    if (n > 1) {
        return numDegree(n / 2);
    }
    if (n === 1) {
        return true;
    }
    return false;
}

function numRange(a, b) {
    for (let i = a; i <= b; i++) {
        if (numDegree(i) === true) {
            console.log(i);
        }
    }
}

numRange(10, 600);
