for (let i = 500; i <= 1000; i++) {
    const s = i.toString();
    const s1 = s.split('').reverse().join('');
    if (s === s1) {
        console.log(i);
    }
}
