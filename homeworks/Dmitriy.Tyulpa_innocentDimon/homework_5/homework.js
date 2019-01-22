/**
 * 1. Преобразуйте числовой массив в соответствующий массив сумм используя замыкания:
 * f[n] = x[0] + x[1] + x[2] +...+ x[n] or f[n] = f[n-1] + x[n]
 * Example :
 * [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 * [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 * parameter numbers someArr = [...]
 * returns sumArray
 */

const myArray1 = [10, -10, 10, -10, 10];
const myArray2 = [0, 0, 0, 0, 0];
const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function helper() {
    let currNum = 0;
    return (nextNum) => {
        currNum += nextNum;
        return currNum;
    };
}

function numberToSumm(inputArr) {
    const calc = helper();
    return inputArr.map(calc);
}

console.log();
console.log('1. Преобразование числового массива в соответствующий массив сумм используя замыкания');
console.log('-------------------------------------------------------------------------------------');
console.log(`${myArray1}\n${numberToSumm(myArray1)}\n`);
console.log(`${myArray2}\n${numberToSumm(myArray2)}\n`);
console.log(`${myArray3}\n${numberToSumm(myArray3)}`);

/**
 * 2. Cоздать функцию, которая возвращает объект с ключами элементов массива, и значением -
 * количеством повторов одинаковых элементов в массиве. Для лучшего понимания здесь приведен пример:
 * let classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs',
 * 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
 * return {
 *    header: 1
 *    link: 1
 *     menu: 4
 *     menu_item: 3
 *     tab_item: 2
 *     tabs: 2
 * }
 */

const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];

function countElements(myArray) {
    const result = {};
    myArray.forEach((element) => {
        if (element in result) {
            result[element]++;
        } else {
            result[element] = 1;
        }
    });
    return result;
}

console.log();
console.log('2. Объект с ключами элементов массива, и значением - количеством повторов.');
console.log('--------------------------------------------------------------------------');
console.log(`${classes}`);
console.dir(countElements(classes)); // console.log(`${JSON.stringify(countElements(classes))}`);

/**
 * 3. Реализация функции innerCopy - для копирования объекта с учетом вложенных объектов:
 * const  obj = {b: ‘c’, d: {e: ‘f’}},
 * objCopy = innerCopy(a);
 * objCopy.d // {e: ‘f’}
 */

const myObj = { b: 'c', d: { e: 'f' } };

function innerCopy(objToCopy) {
    const result = {};
    Object.keys(objToCopy).forEach((key) => {
        if (objToCopy[key] instanceof Object) {
            result[key] = innerCopy(objToCopy[key]);
        } else result[key] = objToCopy[key];
    });
    return result;
}

const copiedObj = innerCopy(myObj);

console.log();
console.log('3. Копирование объекта с учетом вложенных объектов.');
console.log('---------------------------------------------------');
console.dir(myObj); // console.log(`${JSON.stringify(myObj)}\n`);
console.dir(copiedObj); // c onsole.log(`${JSON.stringify(copiedObj)}\n`);
// myObj.d.e = 'test';
// console.dir(myObj);
// console.dir(copiedObj);

/**
 * 4. Напишите функцию getPeople, которая бы возвращала массив друзей по передаваемому id.
 * Коллекция, с которой будет работать функция:
 * const people = [
 * {id: 1, name: 'Nick', friends: [2,5,6]},
 * {id: 2, name: 'John', friends: [1, 3]},
 * {id: 3, name: 'Mike', friends: [2, 5]},
 * {id: 4, name: 'Janny', friends: null},
 * {id: 5, name: 'Edward', friends: [1, 3]},
 * {id: 6, name: 'Jeen', friends: [5, 1]}
 * ];
 */

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(id) {
    const lookId = people.filter(person => person.id === id);
    if (!lookId.length) return `Человека с ID ${id} не существует`;
    const aboutPerson = lookId[0];
    const peopleIds = aboutPerson.friends;
    if (peopleIds) {
        const friends = people.filter(person => peopleIds.includes(person.id));
        return `Друзья ${aboutPerson.name}: ${JSON.stringify(friends)}`;
    }
    return `У ${aboutPerson.name} нет друзей`;
}

console.log();
console.log('4. Вывод друзей человека по ID.');
console.log('-------------------------------');
console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(7));
