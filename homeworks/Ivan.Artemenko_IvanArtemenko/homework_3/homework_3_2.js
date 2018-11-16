for (let i = 10; i <= 600; i++) {
    for (let j = 0; j <= 20; j++) {
        const rezOne = (2 ** j);
        if (rezOne === i) {
            console.log(rezOne);
        }
    }
}
