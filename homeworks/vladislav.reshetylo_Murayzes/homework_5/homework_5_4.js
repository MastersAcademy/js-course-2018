// task 4
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(humanId) {
    const result = [];
    const user = people.find(human => human.id === humanId);
    if (typeof user === 'undefined') {
        return null;
    }
    if (Array.isArray(user.friends)) {
        return people.filter(human => user.friends.includes(human.id));
    }
    return result;
}
console.log(getPeople(1));
console.log(getPeople(100));
