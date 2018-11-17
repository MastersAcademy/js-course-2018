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
    return number *= number;
}

let a = 5,
    b = 15,
    c = 53;

console.log();
console.log("1. РАБОТА С ФУНКЦИЯМИ И МАССИВАМИ");
console.log();
console.log("Задание 1.1");
console.log("------------");
console.log("1)", a," ^ 2 = ", power(a));
console.log("2)", b," ^ 2 = ", power(b));
console.log("3)", c," ^ 2 = ", power(c));

/**
 * 1.2 Написати функцію, яка створює масив з числами від 0 до заданої
 * величини та заданим кроком між значеннями елементів
 * 1) Тестові дані:
 * - Максимальне значення: 50
 * - Крок між елементами : 5
 * Результат виконання:
 * [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
 */

function createArray (maxValue, step) {
    let resultArray = [];
    for (let i = 0; i <= maxValue; i += step) {
        resultArray.push(i);
    }
    return resultArray;
}

console.log();
console.log("Задание 1.2");
console.log("------------");
console.log(createArray(maxValue = 50, step = 5));
console.log(createArray(maxValue = 32, step = 4));

/**
 * 1.3 Привести до квадрату всі значення елементів масиву.
 * Вхідним масивом є результат виконання попереднього завдання (2) з агрументами 32 та 4.
 * Тестові дані: [ 0, 4, 8, 12, 16, 20, 24, 28, 32 ]
 * Результат виконання:
 * [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
 */

function createArrayPow (Array) {
    for (let i = 0; i < Array.length; i++) {
        resultArray = Array.map(elem => elem * elem);
    }
    return resultArray;
}

console.log();
console.log("Задание 1.3");
console.log("------------");
console.log(createArrayPow(createArray(maxValue = 32, step = 4)));

/**
 * 1.4 Знайти суму елементів масиву з попереднього завдання
 * Тестові дані: [ 0, 16, 64, 144, 256, 400, 576, 784, 1024 ]
 * Результат виконання: 3264
 */

function sumArray (Array) {
    let resultSum = 0;
    for (i = 0; i < Array.length; i++) {
        resultSum = resultSum + Array[i];
    }
    return resultSum;
}

console.log();
console.log("Задание 1.4");
console.log("------------");
console.log(sumArray(createArrayPow(createArray(maxValue = 32, step = 4))));
