function setSum() {
    let result = 0;
    return (elemetnArr) => {
        result += elemetnArr;
        return result;
    };
}

function sumArr(arr) {
    const setArr = setSum();
    return arr.map(setArr);
}

let someArr = [10, -10, 10, -10, 10];
console.log(sumArr(someArr));
someArr = [0, 0, 0, 0, 0];
console.log(sumArr(someArr));
someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArr(someArr));
