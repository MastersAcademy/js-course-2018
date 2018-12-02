// https://github.com/MastersAcademy/js-course-2018/issues/642

/**
 * Преобразуйте числовой массив в соответствующий массив сумм используя замыкания:
 * f[n] = x[0] + x[1] + x[2] +...+ x[n] or f[n] = f[n-1] + x[n]
 * Example :
 * [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 * [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 * parameter numbers someArr = [...]
 * returns sumArray
 */

function helper() {
    let currNum = 0;
    return (nextNum) => {
        currNum += nextNum;
        return currNum;
    };
}

function numArrToSumArr(inputArr) {
    const calc = helper();
    return inputArr.map(calc);
}

const someArr1 = [10, -10, 10, -10, 10];
const someArr2 = [0, 0, 0, 0, 0];
const someArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Task 1: Transform numbers array to summ array');
console.log(`${someArr1} >> ${numArrToSumArr(someArr1)}`);
console.log(`${someArr2} >> ${numArrToSumArr(someArr2)}`);
console.log(`${someArr3} >> ${numArrToSumArr(someArr3)}`);

/**
 * Cоздать функцию, которая возвращает объект с ключами элементов массива, и значением -
 * количеством повторов одинаковых элементов в массиве. Для лучшего понимания здесь приведен пример:
 * let classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs',
 * 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
 * return {
 *    header: 1
      link: 1
      menu: 4
      menu_item: 3
      tab_item: 2
      tabs: 2

}
*/
function countElements(inputArr) {
    const result = {};
    inputArr.forEach((element) => {
        if (element in result) {
            result[element]++;
        } else {
            result[element] = 1;
        }
    });
    return result;
}

const classes = [
    'header',
    'menu',
    'menu_item',
    'tabs',
    'tab_item',
    'menu',
    'link',
    'tabs',
    'tab_item',
    'menu',
    'menu_item',
    'menu',
    'menu_item',
];

console.log('\nTask 2. Counting occurancies of elements:');
console.log(`Input: ${classes}`);
console.log(`Result: ${JSON.stringify(countElements(classes))}`);

/**
 * Реализация функции innerCopy - для копирования объекта с учетом вложенных объектов:
 * const  obj = {b: ‘c’, d: {e: ‘f’}},
 * objCopy = innerCopy(a);
 * objCopy.d // {e: ‘f’}
 */
function innerCopyV1(objToCopy) {
    const result = {};
    Object.keys(objToCopy).forEach((key) => {
        if (objToCopy[key] instanceof Object) {
            result[key] = innerCopyV1(objToCopy[key]);
        } else result[key] = objToCopy[key];
    });
    return result;
}

const obj = { b: 'c', d: { e: 'f' } };
const resultingObj = innerCopyV1(obj);

console.log('\nTask 3. Copying object:');
console.log(`Object to copy: ${JSON.stringify(obj)}`);
console.log(`Result: ${JSON.stringify(resultingObj)}`);
console.log('Checking.. (let\'s change obj.d.e from "f" to "hey")');
obj.d.e = 'hey';
console.dir(obj);
console.dir(resultingObj);

/**
 * Напишите функцию getPeople, которая бы возвращала массив друзей по передаваемому id.
 * Коллекция, с которой будет работать функция:
 */
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
/* const getPeople = function(userId) {
 *  // Put you code here
 * };
 * Example: getPeople(2) // [{id: 1, name: 'Nick', friends: [2,5,6]},
 * {id: 3, name: 'Mike', friends: [2, 5]}] getPeople(4) // [] getPeople(100500) // null
 */
function getPeople(id) {
    const matchinId = people.filter(person => person.id === id);
    if (!matchinId.length) return `A person with ID ${id} not found`;
    const ourGuy = matchinId[0];
    const peopleNeededIds = ourGuy.friends;
    if (peopleNeededIds) {
        const friends = people.filter(person => peopleNeededIds.includes(person.id));
        return `${ourGuy.name} has following friends: ${JSON.stringify(friends)}`;
    }
    return `${ourGuy.name} has no friends :(`;
}

console.log('\nTask 4. Listing friends for a person with a given ID:');
console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(10500));
