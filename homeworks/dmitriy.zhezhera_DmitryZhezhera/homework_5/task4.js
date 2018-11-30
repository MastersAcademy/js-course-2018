const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    if (!people.some(person => (person.id === userId))) return null;
    return people.filter((person) => {
        if (person.friends !== null
            && person.friends.some(id => id === userId)) {
            return true;
        }
        return false;
    });
}

console.log('=1=');
console.log(getPeople(2));
console.log('=2=');
console.log(getPeople(4));
console.log('=3=');
console.log(getPeople(100500));
