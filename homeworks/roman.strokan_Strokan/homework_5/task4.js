const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const usedObj = people.find(currentObj => currentObj.id === userId);
    if (usedObj.friends !== null) {
        return people.filter(users => usedObj.friends.includes(users.id));
    }
    return null;
}
console.log(getPeople(1));
