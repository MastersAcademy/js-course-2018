for (let i = 500; i <= 1000; i++) {
    const str = i.toString();

    const palind = str.split('').reverse().join('');
    if (str === palind) {
        console.log(palind);
    }
}
