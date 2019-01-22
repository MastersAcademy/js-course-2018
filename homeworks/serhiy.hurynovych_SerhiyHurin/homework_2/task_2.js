for (let i = 500; i <= 1000; i++) {
    const darkside = i.toString().split('').reverse().join('');
    if (darkside === i.toString()) {
        console.log(darkside);
    }
}
