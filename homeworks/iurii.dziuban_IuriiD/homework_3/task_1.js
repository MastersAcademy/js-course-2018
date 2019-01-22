// Tasks 1.1-1.4 from https://github.com/MastersAcademy/js-course-2018/issues/313

/**
 * 1.1 Написати функцію, яка приводить в квадрат переданий їй аргумент.
 * Тестові дані: 5, 15, 53.
 * Результат виконання:
 * 1) 5 ^2 = 25
 * 2) 15^2 = 225
 * 3) 53^2 = 2809
 */

function getSquare(inputNumber) {
    return inputNumber * inputNumber;
}

const testInput1 = [5, 15, 53];
console.log('Task #1-1. Get squares');
testInput1.forEach(element => console.log(`Square of ${element} equals to ${getSquare(element)}`));

/**
 * 1.2 Написати функцію, яка створює масив з числами від 0 до заданої
 * величини та заданим кроком між значеннями елементів
 * 1) Тестові дані:
 * - Максимальне значення: 50
 * - Крок між елементами : 5
 * Результат виконання: [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
 */

function getSteppedArray(upperBorder, step) {
    const result = [0];
    let n = 0;
    while (n + step <= upperBorder) {
        result.push((n += step));
    }
    return result;
}

const maxValues = [50, 32];
const increments = [5, 4];
console.log(
    '\nTask #1-2. Create an array of integers from 0 to argument1 (e.g. from 0 to 50), in increments of argument2 (e.g. 5)',
);
console.log(`Array from 0 to ${maxValues[0]}, in increments of ${increments[0]}`);
console.log(getSteppedArray(maxValues[0], increments[0]));
console.log(`Array from 0 to ${maxValues[1]}, in increments of ${increments[1]}`);
console.log(getSteppedArray(maxValues[1], increments[1]));

/**
 * 1.3 Привести до квадрату всі значення елементів масиву. Вхідним масивом є результат
 * виконання попереднього завдання (2) з агрументами 32 та 4.
 * Тестові дані: [ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]
 * Результат виконання: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
 */

function involuteArr(inputArr) {
    return inputArr.map(element => element * element);
}

console.log(
    `\nTask #1-3. Raise to power 2 elements of the 2nd array got in previous task, [${getSteppedArray(
        maxValues[1],
        increments[1],
    ).join(', ')}]`,
);
console.log(involuteArr(getSteppedArray(maxValues[1], increments[1])));

/**
 * 1.4 Знайти суму елементів масиву з попереднього завдання
 * Тестові дані: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
 * Результат виконання: 3264
 */
function summarizeArray(inputArray) {
    return inputArray.reduce((total, element) => total + element, 0);
}

console.log(
    `\nTask #1-4. Summ over elements of array got in previous task, [${involuteArr(
        getSteppedArray(maxValues[1], increments[1]),
    ).join(', ')}]`,
);
console.log(summarizeArray(involuteArr(getSteppedArray(maxValues[1], increments[1]))));
