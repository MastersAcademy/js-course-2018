function isStepBin(numb) {
    let b;
    if (numb % 2) {
        b = false;
    } else {
        b = numb > 2 ? isStepBin(numb / 2) : true;
    }
    return b;
}

for (let i = 10; i <= 600; i++) {
    if (isStepBin(i)) {
        console.log(i);
    }
}
