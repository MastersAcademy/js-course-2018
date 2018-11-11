for (let i = 500; i < 1001; i++) {
    let mirNum = i.toString().split('').reverse().join('');
    if (mirNum === i.toString()) {
        console.log(mirNum);
    }
}