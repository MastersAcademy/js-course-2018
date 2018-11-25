const delay = 1000; // 1s

// Callback based solution
const logNumbersCallback = (number) => {
    setTimeout((a) => {
        console.log(a);
        setTimeout((b) => {
            console.log(b);
            setTimeout((c) => {
                console.log(c);
            }, delay, b - 20);
        }, delay, a * 3);
    }, delay, number + 10);
};

logNumbersCallback(10); // 20, 60, 40
