// 1 task
const exampleArray = [10, -10, 10, -10, 10];
const resultArray = [];
function sumArray(arr) {
    arr.reduce((previousSum, currentNumber) => {
        const value = previousSum + currentNumber;
        resultArray.push(value);
        return value;
    }, 0);
}
sumArray(exampleArray);
console.log(resultArray);
// 2 task, please write a hint if there are any easier method for it
const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];
const obj = {};
function repeatsInObj(array) {
    array.forEach((element) => {
        obj[element] = 0;
    });
    const objKeys = Object.keys(obj);
    array.forEach((element) => {
        for (let i = 0; i < objKeys.length; i++) {
            if (objKeys[i] === element) {
                const key = objKeys[i];
                obj[key] += 1;
            }
        }
    });
    console.log(obj);
}
repeatsInObj(classes);
// 3 task, I know this the easiest way to copy everything :D
const objForCopy = { b: 'f', d: { e: 'f' } };
function innerCopy(object) {
    const objParsed = JSON.stringify(object);
    const objCopy = JSON.parse(objParsed);
    return objCopy;
}
const objInnerCopy = innerCopy(objForCopy);
objInnerCopy.d.e = 0;
console.log(objForCopy.d);
console.log(objInnerCopy.d);
// 4 task
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getPeople(peopleArray, index) {
    let peopleWithFriends = [];
    for (let i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].friends != null) {
            if (peopleArray[i].friends.indexOf(index) >= 0) {
                peopleWithFriends.push(peopleArray[i]);
            }
        }
    }
    if (peopleWithFriends.length < 1) {
        peopleWithFriends = null;
    }
    console.log(peopleWithFriends);
}
getPeople(people, 2);
