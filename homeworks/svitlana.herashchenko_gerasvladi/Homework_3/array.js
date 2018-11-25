function toArray(max, krok) {
    const array = [];
    for (let i = 0; i <= max; i += krok) {
        array.push(i);
    }
    return array;
}
console.log(toArray(50, 5));
console.log(toArray(32, 4));
