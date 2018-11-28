function numberValue(n) {
    if (n === 1) {
        return 1;
    }
    if (n % 2 === 0) {
        return numberValue(n / 2);
    }
    return false;
}

function validValue(min, max) {
    for (let num = min; num <= max; num++) {
        if (numberValue(num)) {
            console.log(num);
        }
    }
}

validValue(10, 600);
