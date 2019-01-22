for (let i = 500; i < 1000; i++) {
    const num = i.toString();

    const first = num.charAt(0);
    const last = num.charAt(2);

    if (first === last) {
        console.log(num);
    }
}
