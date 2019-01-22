for (let test = 500; test < 1000; test++) {
    const numberTest = test.toString().split('').reverse().join('');
    const numberTestCheck = test.toString();
    if (numberTest === numberTestCheck) {
        console.log(`${test}`);
    }
}
