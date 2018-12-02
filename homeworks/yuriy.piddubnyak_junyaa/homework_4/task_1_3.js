const number = 100;
const promise = new Promise((resolve) => {
    resolve(number);
});
async function func() {
  await promise;
    promise.then((value) => {
        setTimeout(() => {
        }, 0);
        return value + 10;
    }).then((value) => {
        setTimeout(() => {
            console.log(value);
        }, 1000);
        return value * 3;
    }).then((value) => {
        setTimeout(() => {
            console.log(value);
        }, 2000);
        return value - 20;
    }).then((value) => {
        setTimeout(() => {
            console.log(value);
        }, 3000);
    });
}
func();
