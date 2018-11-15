const arr = [0, 16, 64, 144, 256, 400, 576, 784, 1024];

function sum() {
    let sumArr = 0;
    for (let i = 1; i < arr.length; i++) {
        sumArr += arr[i];
    }
    console.log(sumArr);
}

sum(arr);
