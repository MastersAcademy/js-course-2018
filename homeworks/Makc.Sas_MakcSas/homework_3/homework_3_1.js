function square() {
    let numberElements = 0;
    const massA = [];
    const massB = [];
    let sum = 0;
    for (numberElements; numberElements <= 32; numberElements += 4) {
        massA[numberElements] = numberElements;
        massB[numberElements] = (massA[numberElements] ** 2);
        sum += massB[numberElements];
    }
    console.log(sum);
}
square();
