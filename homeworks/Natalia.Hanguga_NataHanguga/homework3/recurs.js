let n;
for (let i = 0; i < 10; i++) {
    n = 2 ** i;
    if (n > 10 && n < 600) {
        // console.log(n);
    }
}

function rec(i) {
    let n;
    if (i === 1) {
        return 1;
    }
    else {
        // if (n === 2 ** i) {
        //  console.log(n);
        return i * rec(i - 1);
        // }
        n++;

    }
}
rec(10);