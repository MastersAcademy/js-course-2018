/*
* task 1.1
 */

function myPow(num, degree) {
    let result = num;
    if (degree >= 1) {
        for (let i = 1; i < degree; i++) {
            result *= num;
        }
        return result;
    }
    return 1;
}

console.log(myPow(53, 2));

/*
* task 1.2
 */


// 1.2.1
