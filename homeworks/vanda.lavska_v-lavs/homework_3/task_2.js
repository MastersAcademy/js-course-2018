const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter min number ', (min) => {
    rl.question('Enter max number ', (max) => {
        function createArray() {
            function recursion(n) {
                if (n === 1) {
                    return 1;
                }
                if (n > 1 && n < 2) {
                    return n;
                }
                return recursion(n / 2);
            }
            const myArray = [];
            for (let i = `${min}`; i <= `${max}`; i++) {
                if (recursion(i) === 1) {
                    myArray.push(i);
                    console.log(myArray);
                }
            }
        }
        createArray(`${min}`, `${max}`);

        rl.close();
    });
});
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// const myArray = [];
// for (let i = min; i <= max; i++) {
//     function recursion(n) {
//         if (n === 1) {
//             return 1;
//         }
//         if (n > 1 && n < 2) {
//             return 0;
//         }
//         return recursion(n / 2);
//     }
//     if (recursion(n) === 1) {
//         myArray.push(recursion(n));
//         console.log(myArray);
//         return myArray;
//     }

// function createArray(min, max) {
//     function recursion(n) {
//         if (n === 1) {
//             return 1;
//         }
//         if (n > 1 && n < 2) { // n % 2 === 0 ??
//             return n;
//         }
//         return recursion(n / 2);
//     }
//     const myArray = [];
//     for (let i = min; i <= max; i++) {
//         if (recursion(i) === 1) {
//             myArray.push(i);
//         }
//         console.log(myArray);
//     }
// }
// createArray(10, 600);
