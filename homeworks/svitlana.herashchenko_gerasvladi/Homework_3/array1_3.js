function toArray(max, krok) {
    const array = [];
    for (let i = 0; i <= max; i += krok) {
        array.push(i);
    }
    return array;
}
console.log(toArray(32, 4));
const kvarray = toArray(32, 4).map(numb => numb * numb);
console.log(kvarray);
