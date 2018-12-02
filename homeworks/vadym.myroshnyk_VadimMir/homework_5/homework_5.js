// tesk 1
const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArrayFunction() {
    let sum = 0;
    return someArr.map((item) => {
        sum = item + sum;
        return sum;
    });
}

console.log(sumArrayFunction());

// tesk 2
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function returnObjKey() {
    const result = {};

    classes.reduce((previousValue, value, i) => {
        let sumValue = 0;
        sumValue = classes.filter(item => item === classes[i]).length;
        result[value] = sumValue;
        return result[value];
    });
    return result;
}

console.log(returnObjKey());

// tesk 3
const obj = {
    b: 'c',
    d: { e: 'f' },
};

function innerCopy() {
    const newObj = {};
    Object.keys(obj).forEach((value) => {
        if (typeof (obj[value]) === 'object') {
            for (let i = 0; i < obj[value]; i++) {
                innerCopy(obj[value]);
            }
        }
        newObj[value] = obj[value];
    });
    return newObj;
}
const copy = innerCopy();
console.log(copy);
console.log(copy.d);

// tesk 4
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = function (userId) {
    const arrPeople = [];
    people.find((user) => {
        if (user.id === userId) {
            people.filter((item) => {
                if (user.friends.includes(item.id) === true) {
                    arrPeople.push(item);
                }
                return null;
            });
        }
        return null;
    });
    return arrPeople;
};

console.log(getPeople(2));
