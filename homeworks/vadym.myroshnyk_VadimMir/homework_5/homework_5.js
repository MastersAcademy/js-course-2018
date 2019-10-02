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

function returnObjKey(classObj) {
    const result = {};

    classObj.reduce((previousValue, value) => {
        if (!result[value]) result[value] = 1;
        else result[value]++;
        return result;
    });
    return result;
}

console.log(returnObjKey(classes));

// tesk 3
const obj = {
    b: 'c',
    d: { e: 'f' },
};

function innerCopy(objNew) {
    const newObj = {};
    Object.keys(objNew).forEach((value) => {
        if (typeof (objNew[value]) === 'object') {
            innerCopy(objNew[value]);
        }
        newObj[value] = objNew[value];
    });
    return newObj;
}
const copy = innerCopy(obj);
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

const getPeople = function letsGetPeople(userId) {
    const peopleFriends = people.find((user) => {
        if (user.id === userId) {
            return user;
        }
        return null;
    });

    return people.filter((item) => {
        if (peopleFriends.friends.includes(item.id) === true) {
            return item;
        }
        return null;
    });
};

console.log(getPeople(2));
