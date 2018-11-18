function isPowOfTwo(numb) {
    let b;
    if (numb % 2) {
        b = false;
    } else {
        b = numb > 2 ? isPowOfTwo(numb / 2) : true;
    }
    return b;
}

for (let i = 10; i <= 600; i++) {
    if (isPowOfTwo(i)) {
        console.log(i);
    }
}
