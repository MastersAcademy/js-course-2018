for (let i = 500; i < 1000; i++) {
    let string = i.toString();
    let reverse = string.split("").reverse().join("");
    if (string === reverse) {
        console.log(i);
    }
}