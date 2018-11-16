const start = 10;
const end = 600;

function recurs(power) {
    let result = 0;
    result = 2 ** power;
    if (result <= start) {
        recurs(power + 1);
    } else if (result <= end) {
        console.log(result);
        recurs(power + 1);
    }
}

recurs(2);
