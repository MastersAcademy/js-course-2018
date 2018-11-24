const number = 100;
const promise = new Promise((resolve) => {
    resolve(number);
});
async function func() {
    const x = await promise;
    const a = x + 10;
    setTimeout(() => {
        console.log(a);
    }, 2000);
    const y = x * 3;
    setTimeout(() => {
        console.log(y);
    }, 3000);
    const z = y - 20;
    setTimeout(() => {
        console.log(z);
    }, 4000);
}
func();
