function createArray(start, finish, step) {
    const results = [];
    for (let i = start; i <= finish; i += step) {
        results.push(i);
    }
    return results;
}

console.log(createArray(0, 50, 5));
console.log(createArray(0, 32, 4));
