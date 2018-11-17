function isStepBin(numb) {
    let b;
    if (numb % 2) {
        b = false;
    } else if (numb > 2) {
        b = isStepBin(numb / 2);
    } else {
        b = true;
    }
    return b;
}

for (let i = 10; i <= 600; i++) {
    if (isStepBin(i)) {
        console.log(i);
    }
}
