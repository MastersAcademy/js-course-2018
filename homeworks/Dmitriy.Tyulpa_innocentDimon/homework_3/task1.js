/**
 * 1 Робота з функціями та масивами:
 *
 * 1.1 Написати функцію, яка приводить в квадрат переданий їй аргумент
 * Тестові дані: 5, 15, 53.
 * Результат виконання:
 * 1) 5 ^2 = 25
 * 2) 15^2 = 225
 * 3) 53^2 = 2809
 */

function power(number) {
    const result = number * number;
    return result;
}

const a = 5;
const b = 15;
const c = 53;

console.log();
console.log('1. РАБОТА С ФУНКЦИЯМИ И МАССИВАМИ');
console.log();
console.log('Задание 1.1');
console.log('------------');
console.log('1)', a, ' ^ 2 = ', power(a));
console.log('2)', b, ' ^ 2 = ', power(b));
console.log('3)', c, ' ^ 2 = ', power(c));

/**
 * 1.2 Написати функцію, яка створює масив з числами від 0 до заданої
 * величини та заданим кроком між значеннями елементів
 * 1) Тестові дані:
 * - Максимальне значення: 50
 * - Крок між елементами : 5
 * Результат виконання:
 * [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
 */

function createArray(maxValue, step) {
    const resultArray = [];
    for (let i = 0; i <= maxValue; i += step) {
        resultArray.push(i);
    }
    return resultArray;
}

// let maxValue;
// let step;

console.log();
console.log('Задание 1.2');
console.log('------------');
console.log(createArray(50, 5));
console.log(createArray(32, 4));

/**
 * 1.3 Привести до квадрату всі значення елементів масиву.
 * Вхідним масивом є результат виконання попереднього завдання (2) з агрументами 32 та 4.
 * Тестові дані: [ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]
 * Результат виконання:
 * [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
 */

function createArrayPow(Array) {
    let resultArray = [];
    for (let i = 0; i < Array.length; i++) {
        resultArray = Array.map(elem => elem * elem);
    }
    return resultArray;
}

console.log();
console.log('Задание 1.3');
console.log('------------');
console.log(createArrayPow(createArray(32, 4)));

/**
 * 1.4 Знайти суму елементів масиву з попереднього завдання
 * Тестові дані: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
 * Результат виконання: 3264
 */

function sumArray(Array) {
    let resultSum = 0;
    for (let i = 0; i < Array.length; i++) {
        resultSum += Array[i];
    }
    return resultSum;
}

console.log();
console.log('Задание 1.4');
console.log('------------');
console.log(sumArray(createArrayPow(createArray(32, 4))));
