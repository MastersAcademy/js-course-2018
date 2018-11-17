//  1.1

function square_of_number(n) {
    return n *n;
}

console.log(square_of_number(5));
console.log(square_of_number(15));
console.log(square_of_number(53));

//  1.2.1 and 1.2.2

function step_array(max_nember, step) {
    const array = [];
    for (let i = 0; i <= max_nember; i += step) {
        array.push(i);
    }
    return array;
}

console.log(step_array(50, 5));
console.log(step_array(32, 4));

//  1.3
function elements_to_square(array) {
    return array.map(n => n * n);
}

console.log(elements_to_square(step_array(32, 4)));

//  1.4

function elements_sum(array) {
    return array.reduce((sum, next_n) => sum + next_n);
}

console.log(elements_sum(elements_to_square(step_array(32, 4))));
