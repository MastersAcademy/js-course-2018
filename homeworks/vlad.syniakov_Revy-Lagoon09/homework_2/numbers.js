function input(a) {
    const arr = a.toString().split('');
    const reverse = a.toString().split('').reverse().join('');
    arr[arr.length - 1] = reverse;
    console.log(arr.join(''));
}
for (let i = 500; i <= 1000; i++) {
    input(i);
}
