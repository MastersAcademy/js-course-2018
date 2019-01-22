function pow(a) { // task 1.1
    return a * a;
}

function massCreate(step, max) { // task 1.2
    const newmass = [];
    for (let i = 0; i <= max; i += step) {
        newmass.push(i);
    }
    return newmass;
}

const summ = massCreate(4, 32).map(pow).reduce((a, b) => a + b); // task 1.3 & 1.4

console.log(summ);
