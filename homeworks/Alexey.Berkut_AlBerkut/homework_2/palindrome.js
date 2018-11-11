function checkPl(str) {
    return (str === str.split('').reverse().join(''));
}

for (let i = 500; i < 1000; i++) {
    const x = String(i);
    if (checkPl(x) === true) {
        console.log(x);
    }
}
