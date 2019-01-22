// Task 1

const arrFirst = [10, -10, 10, -10, 10];
const arrSecond = [0, 0, 0, 0, 0];
const arrThird = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArrNumbers(inputArr) {
    let newArr = 0;
    return inputArr.map((num) => {
        newArr += num;
        return newArr;
    });
}

console.log(sumArrNumbers(arrFirst));
console.log(sumArrNumbers(arrSecond));
console.log(sumArrNumbers(arrThird));

// Task 2

const classes = ['header', 'menu', 'menu_item', 'tabs', 'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu', 'menu_item', 'menu', 'menu_item'];
const newObj = {};
function showRepeatElem(inputObj) {
    inputObj.forEach((key) => {
        if (key in newObj) {
            newObj[key] += 1;
        } else {
            newObj[key] = 1;
        }
    });
    console.log(newObj);
}

showRepeatElem(classes);


// Task 3

const obj = { b: 'c', d: { e: 'f' } };

function innerCopy(inputObj) {
    const result = {};
    Object.keys(inputObj).forEach((key) => {
        if (typeof inputObj[key] === 'object') {
            result[key] = innerCopy(inputObj[key]);
        } else {
            result[key] = inputObj[key];
        }
    });
    return result;
}

console.log(innerCopy(obj));
console.log(innerCopy(obj.d));

// Task 4

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const friends = [];
    if (people.find(user => user.id === userId)) {
        people.forEach((object) => {
            if (Array.isArray(object.friends)) {
                if (object.friends.includes(userId)) {
                    friends.push(object);
                }
            }
        });
    } else {
        return null;
    }
    return friends;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(10500));
