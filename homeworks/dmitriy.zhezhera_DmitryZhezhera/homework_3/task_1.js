// 1.1 Написати функцію, яка приводить в квадрат переданий їй аргумент
function toSquare(number) {
    return number * number;
}
console.log('result of task 1.1 results:');
console.log(toSquare(5));
console.log(toSquare(15));
console.log(toSquare(53));

// 1.2 Написати функцію, яка створює масив з числами від 0 до заданої
// величини та заданим кроком між значеннями елементів
function createArray(maxNumber, step) {
    const array = [];
    for (let i = 0; i <= maxNumber; i += step) {
        if (i > maxNumber) break;
        array.push(i);
    }
    return array;
}
console.log('result of task 1.2 results:');
console.log(createArray(50, 5));
const myArray12 = createArray(32, 4);
console.log(myArray12);

// 1.3 Привести до квадрату всі значення елементів масиву.Вхідним масивом є
// результат виконання попереднього завдання(2) з агрументами 32 та 4
console.log('result of task 1.3 results:');
const myArray13 = myArray12.map(toSquare);
console.log(myArray13);

// 1.4 Знайти суму елементів масиву з попереднього завдання
const summTask14 = myArray13.reduce((sum, current) => sum + current, 0);
console.log('result of task 1.4 results:');
console.log(summTask14);
