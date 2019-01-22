// setTimeout
function logNumber(number) {
    setTimeout(() => {
        let tempResult = number + 10;
        console.log(tempResult);
        setTimeout(() => {
            tempResult *= 3;
            console.log(tempResult);
            setTimeout(() => {
                tempResult -= 20;
                console.log(tempResult);
            }, 3000);
        }, 2000);
    }, 1000);
}
logNumber(5);
