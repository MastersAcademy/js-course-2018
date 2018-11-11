const a = 500;
const b = 1000;
for (let i = a; i < b; i++) {
    i += '';
    const legnth = i.length;
    let flag = true;
    for (let j = 0; i < length / 2; j++)
    {
        if (i[j] !== i[length - 1 - j]) {
            flag = false;
        }
    }
    if (flag === true) {
        console.log(i);
    }
}
