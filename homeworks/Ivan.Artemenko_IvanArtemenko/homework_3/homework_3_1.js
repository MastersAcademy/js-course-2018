const arr = [5, 15, 53];
console.log('Task 3.1.1');
arr.forEach((item) => {
    console.log(`${item}^2 = ${item * item}`);
});

function masuv(one, two) {
    const massuv = [];
    for (let i = 0; i <= one; i += two) {
        massuv.push(i);
    }
    return massuv;
}
console.log('Task 3.1.2 \nFrom 0 to 50 in step 5');
console.log(masuv(50, 5));
console.log('From 0 to 32 in step 4');
console.log(masuv(32, 4));

function Stage(one, two) {
    let stepin = [];
    const massuv = [];
    for (let i = 0; i <= one; i += two) {
        massuv.push(i);
        stepin = massuv.map(x => x * x);
    }
    return stepin;
}
console.log('Task 3.1.3 \nElevation to degree');
console.log(Stage(32, 4));

function Cycle(one, two) {
    let suma = [];
    let stepin = [];
    const massuv = [];
    for (let i = 0; i <= one; i += two) {
        massuv.push(i);
        stepin = massuv.map(x => x * x);
        suma = stepin.reduce((summ, nextNumber) => summ + nextNumber);
    }
    return suma;
}
console.log('Task 3.1.4 \nThe amount of the cycle');
console.log(Cycle(32, 4));
