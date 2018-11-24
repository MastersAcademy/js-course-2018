// callback
function logNumbers(number) {
    return number + 10;
}

function twoStep(numberTwo) {
    return logNumbers(numberTwo) * 3;
}

function threeStep(numberThree) {
    return twoStep(numberThree) - 20;
}

setTimeout(()=>{
    console.log(logNumbers(0));
}, 1000);

setTimeout(()=>{
    console.log(twoStep(logNumbers(0)));
}, 2000);

setTimeout(()=>{
    console.log(threeStep(10));
}, 3000);


// promise
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log(logNumbers(0));
    }, 1000);

    setTimeout(()=>{
        console.log(twoStep(logNumbers(0)));
    }, 2000);

    setTimeout(()=>{
        console.log(threeStep(10));
    }, 3000);
});

promise
    .then()
    .catch(err => console.log('err'));


// async await
async function logNum(num) {
    await setTimeout(()=>{
        console.log(logNumbers(0));
    }, 1000);

    await setTimeout(()=>{
        console.log(twoStep(logNumbers(0)));
    }, 2000);

    await setTimeout(()=>{
        console.log(threeStep(10));
    }, 3000);
}

logNum(10)
    .then()
    .catch(err => console.log(err));