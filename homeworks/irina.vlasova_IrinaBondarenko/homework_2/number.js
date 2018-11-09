for (let i = 500; i <= 1000; i++) {
    let s = i.toString();
    let s1 = s.split('').reverse().join('');
    if (s === s1) {
        console.log(i);
    }
}