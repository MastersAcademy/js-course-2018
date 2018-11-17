const end = 600;
let start = 10;
let power = 4;

function recurs() {
    start = 2 ** power;
    if (start < end) {
        console.log(start);
        power += 1;
        recurs();
    }
}
recurs();
