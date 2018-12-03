/*
* task_1
*/

// const numbers = [10, -10, 10, -10, 10];
// const numbers = [0, 0, 0, 0, 0];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getArr() {
    const someArr = numbers.reduce((total, item) => {
        console.log(total);
        return total + item;
    });
    console.log(someArr);
}
getArr(numbers);

/*
* task_2
*/

function getClas(classes) {
    const sumArr = classes.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;

        return acc;
    }, {});

    console.log(sumArr);
}
getClas(['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item']);

/*
* task_3
*/

function cloneObject(obj) {
    const clone = {};
    Object.keys(obj).forEach((key) => {
        if (typeof (obj[key]) === 'object' && obj[key] !== null) { clone[key] = cloneObject(obj[key]); } else clone[key] = obj[key];
    });
    console.log(clone);
    return clone;
}

cloneObject({ b: 'c', d: { e: 'f' } });

/*
* task_4
*/

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = (id) => {
    const user = people.find(item => item.id === id);
    if (!user) {
        console.log('no user');
    } const friends = people.filter(item => user.friends.includes(item.id));
    console.log(friends);
    return friends;
};

getPeople(2);
