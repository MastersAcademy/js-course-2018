function kvadrat(x, y, z) {
    console.log(`1) ${x}^2 = ${x * x}`);
    console.log(`2) ${y}^2 = ${y * y}`);
    console.log(`3) ${z}^2 = ${z * z}`);
}
kvadrat(5, 15, 53);
function masiv(a, b) {
    const mas = [];
    for (let i = 0; i <= a; i += b) {
        mas.push(i);
    }
    console.log(mas);
}
masiv(50, 5);
masiv(32, 4);
function masiv2(a, b) {
    const mas2 = [];
    for (let i = 0; i <= a; i += b) {
        mas2.push(i * i);
    }
    console.log(mas2);
}
masiv2(32, 4);
function summas(a, b) {
    const mas2 = [];
    for (let i = 0; i <= a; i += b) {
        mas2.push(i * i);
    }
    function massum(massiv) {
        let sum = 0;
        for (let j = 0; j < massiv.length; j++) {
            sum += massiv[j];
        }
        return (sum);
    }
    console.log(massum(mas2));
}
summas(32, 4);
