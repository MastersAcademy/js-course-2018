function numbersFibonacci() {
    const randomNumbers = Math.random() * (100 - 50) + 50;
    const mass = [0];
    let nul = 0;
    let one = 1;
    let values = nul + one;
    while (values <= randomNumbers) {
        mass.push(values);
        nul = one;
        one = values;
        values = nul + one;
    }
    return mass;
}
console.log(numbersFibonacci());
