function fibonacciSeries(lastEl) {
    const fibonacciSeriesArray = [];
    let initialEl = 0;
    let nextEl = 1;
    let temp;


    while (initialEl <= lastEl) {
        fibonacciSeriesArray.push(initialEl);
        temp = nextEl;
        nextEl += initialEl;
        initialEl = temp;
    }

    return fibonacciSeriesArray;
}

module.exports = fibonacciSeries;
