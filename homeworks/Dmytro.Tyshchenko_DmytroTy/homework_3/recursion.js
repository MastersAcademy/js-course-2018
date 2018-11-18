function isPowOfTwo(numb) {
    let b;
    if (numb % 2) {
        b = false;
    } else if (numb > 2) {
        b = isPowOfTwo(numb / 2);
    } else {
        b = true;
    }
    return b;
}

for (let i = 10; i <= 600; i++) {
    if (isPowOfTwo(i)) {
        console.log(i);
    }
}
