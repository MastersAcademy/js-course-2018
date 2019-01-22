const sumArray = (someArr) => {
    const arraySum = () => {
        let sum = 0;
        function add(num) {
            sum += num;
            return sum;
        }
        return add;
    };

    const adder = arraySum();

    return someArr.map(adder);
};

// output results

const arr1 = [10, -10, 10, -10, 10];
const arr2 = [0, 0, 0, 0, 0];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const examples = [arr1, arr2, arr3];

examples.forEach(arr => console.log(`[ ${arr} ] => [ ${sumArray(arr)} ]`));
