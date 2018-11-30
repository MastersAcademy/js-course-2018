const sumOfArray = require('../homework_3/task_1').getSumOfArray;

function task() {
    let accumulator = 0;
    return (value) => {
        accumulator += value;
        return accumulator;
    };
}

function getSumArray(array) {
    const closureSum = task();
    return array.map(closureSum);
}

function getCountElements(array) {
    const result = {};
    return array.reduce((counter, item) => {
        result[item] = (item in result) ? result[item] + 1 : 1;
        return result;
    }, {});
}

function cloneObj(obj) {
    return Object.assign({}, obj);
}

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
const getPeople = (userId) => {
    const user = people.find(person => person.id === userId);
    if (!user) return null;
    if (!Array.isArray(user.friends)) return null;
    return people.filter(person => user.friends.includes(person.id));
};

function convertToNumber(value) {
    return parseFloat(value.replace(/,/g, ''));
}

function getPracentValue(value, generalValue) {
    return value / generalValue * 100;
}

function sortArrayOfObjects(firstValue, secondValue) {
    const keyA = firstValue.percentValue;
    const keyB = secondValue.percentValue;
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
}

function getJSONtoObject(arrayJSON) {
    const array = JSON.parse(arrayJSON);
    const populationArray = array.map(country => convertToNumber(country.Population));
    const populationAll = sumOfArray(populationArray);

    const result = array.map(currentElement => ({
        country: currentElement.Country,
        percentValue: getPracentValue(convertToNumber(currentElement.Population),
            populationAll),
        population: currentElement.Population,
    }));

    return result.sort(sortArrayOfObjects);
}

module.exports = {
    getSumArray,
    getCountElements,
    cloneObj,
    getPeople,
    getJSONtoObject,
};
