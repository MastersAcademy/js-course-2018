function input(N) {
    const arr = N.toString().split('');
    const reverse = N.toString().split('').reverse().join('');
    arr[arr.length - 1] = reverse;
    console.log(arr.join(''));
}
for (let i = 500; i <= 1000; i++) {
    input(i);
}
