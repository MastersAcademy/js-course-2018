function num_degree(n) {    if (n > 1) {
        return num_degree(n / 2);
    }
    if (n === 1) {
        return true;
    }
    return false;
}
function num_range(a, b) {
    for (let i = a; i <= b; i++) {
        if (num_degree(i) === true) {
            console.log(i);
        }
    }
}
num_range(10, 600);

