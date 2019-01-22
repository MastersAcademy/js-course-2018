for (let i = 500; i < 1001; i++) {
    const mirNum = i.toString().split('').reverse().join('');
    if (mirNum === i.toString()) {
        console.log(mirNum);
    }
}
