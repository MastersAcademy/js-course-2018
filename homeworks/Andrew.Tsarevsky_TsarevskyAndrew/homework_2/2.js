for (let number = (500); number <= (1000); number++) {
    const num = number.toString();
    const a = num[0];
    const b = num[1];
    const c = num[2];
    const chnum = c + b + a;
    if (chnum === number.toString()) {
        console.log(number);
    }
}
