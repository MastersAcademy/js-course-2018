
function third(x) {
    return x + 10;
}
function second(y) {
    return y * 3;
}
function first(z) {
    return z - 20;
}

// callback
function logNumbers(number) {
    setTimeout((res1) => {
        console.log(third(res1));
        setTimeout((res2) => {
            console.log(second(res2));
            setTimeout((res3) => {
                console.log(first(res3));
            }, 3000, second(res2));
        }, 2000, third(res1));
    }, 1000, number);
}
logNumbers(0);
