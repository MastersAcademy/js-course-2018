function first(array) {
    let value = 0;
    const newArray = array.map((number) => {
        value += number;
        return value;
    });
    return newArray;
}

const arrayOfTens = [10, -10, 10, -10, 10];
const arrayOfNulls = [0, 0, 0, 0, 0];
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = first(arrayOfTens);
const result2 = first(arrayOfNulls);
const result3 = first(arrayOfNumbers);

console.log(result1);
console.log(result2);
console.log(result3);
