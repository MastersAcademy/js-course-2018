
function mirNumArr(min, max) {
    const mirrorNum = [];

    for (let i = min; i < max; i++) {
        if (i.toString().split('').reverse().join('') === i.toString()) {
            mirrorNum.push(i);
        }
    }
    console.log(mirrorNum);
}

mirNumArr(500, 1000);
