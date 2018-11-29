// tesk 1
const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArrayFunction() {
    const arr = [];
    for (const i in someArr) {
        arr[i] = someArr[i];
        const sumArray = arr.reduce((a,b) => a + b, 0);
        console.log(sumArray);
    }
}

sumArrayFunction();

// tesk 2
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function returnObjKey(obj) {
    const result = {};
    for (const i in classes) {
        let sum = 0;
            sum = classes.filter(item => item === classes[i]).length;
        result[classes[i]] = sum ;
    }
    console.log (result);
}

returnObjKey();

// tesk 3
const  obj = {b: "c",
    d: {
        e:"f"},
};

function innerCopy(a) {
    return a = Object.assign({}, obj);
}
const objCopy = innerCopy();
console.log(objCopy);
console.log(objCopy.d);

// tesk 4
const people = [
    { id: 1, name: 'Nick', friends: [2,5,6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = function(userId) {
   for (const i in people) {
        if(people[i].id === userId) {
            for (const j in people[i].friends) {
                const number = people[i].friends[j];
                console.log(people[number - 1]);
            }
        }
    }
};

getPeople(2);
