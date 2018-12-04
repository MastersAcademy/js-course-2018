// Task 1

function calcArr(arr) {
    const resultArr = [];
    let currentSum = 0;
    arr.forEach((element) => {
        currentSum += element;
        resultArr.push(currentSum);
    });
    return resultArr;
}

console.log(calcArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task 2

function getArrStatistics(arr) {
    const result = {};

    arr.forEach((element) => {
        const elExist = Object.prototype.hasOwnProperty.call(result, element);
        if (elExist) {
            result[element]++;
        } else {
            result[element] = 1;
        }
    });

    return result;
}

const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

console.log(getArrStatistics(classes));

// Task 3

function objCopy(obj) {
    const result = {};
    const objKeys = Object.keys(obj);
    objKeys.forEach((el) => {
        if (typeof obj[el] === 'object') {
            result[el] = objCopy(obj[el]);
        } else {
            result[el] = obj[el];
        }
    });
    return result;
}

const obj = { b: 'c', d: { e: 'f' } };
console.log(objCopy(obj));

// Task 4

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getFrendById(id) {
    return people.find((el) => {
        const man = el.id !== id ? false : el;
        return man;
    });
}

function getFrendsById(id) {
    const friendsIds = getFrendById(id).friends;
    if (friendsIds === null) {
        return [];
    }
    return people.filter(friend => friendsIds.includes(friend.id));
}

console.log(getFrendsById(5));
