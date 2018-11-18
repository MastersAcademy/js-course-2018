const rec = (numb) => {
    if (numb === 1) {
        return true;
    } if (numb < 1) {
        return false;
    }
    return rec(numb / 2);
};
const poe = (minNumb, maxNumb) => {
    for (let i = minNumb; i <= maxNumb; i++) {
        if (rec(i)) {
            console.log(i);
        }
    }
};
poe(10, 600);
