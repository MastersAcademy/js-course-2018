function foo(a, time, callback) {
    setTimeout(() => {
        console.log(a);
        callback(a);
    },
    time);
}
function LogNumbers1(a) {
    foo(a + 10, 1000, (res) => {
        foo(res * 3, 2000, (res1) => {
            foo(res1 - 20, 3000, () => {});
        });
    });
}
function bar(b, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(b);
            resolve(b);
        }, time);
    });
}
function LogNumbers2(b) {
    bar(b + 10, 1000)
        .then(res => bar(res * 3, 2000))
        .then(res => bar(res - 20, 3000));
}
async function LogNumbers3(c) {
    let d = 0;
    d = await bar(c + 10, 1000);
    d = await bar(d * 3, 2000);
    await bar(d - 20, 3000);
}
LogNumbers1(123);
LogNumbers2(123);
LogNumbers3(123);
