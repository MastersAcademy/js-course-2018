function isPowOfTwo(numb) {
    if (numb % 2) {
        return false;
    }
    return numb > 2 ? isPowOfTwo(numb / 2) : true;
}

for (let i = 10; i <= 600; i++) {
    if (isPowOfTwo(i)) {
        console.log(i);
    }
}
