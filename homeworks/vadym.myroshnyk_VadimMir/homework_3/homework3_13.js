const arr = [0, 4, 8, 12, 16, 20, 24, 28, 32];

function square() {
    const empy = [];
    for (let i = 0; i < arr.length; i++) {
        empy.push(arr[i] * arr[i]);
    }
    console.log(empy);
}

square(arr);
