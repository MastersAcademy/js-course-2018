let a = 2;
function riseToDegree(a) {
    return Math.pow(a,2);
}
console.log(riseToDegree(5));
console.log(riseToDegree(15));
console.log(riseToDegree(53));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Max value ', (answer) => {
    rl.question('Step ', (answer2) => {

        let arr = [];
        let step = +answer2;
        let size = +answer;

        for (let i = 0; i <= size; i+=step) {
            arr.push(i);
        }
        console.log(arr);
        powForArray(arr);
        rl.close();
    });
});
function powForArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        newArr.push(riseToDegree(element));
    }
    console.log(newArr);

}
