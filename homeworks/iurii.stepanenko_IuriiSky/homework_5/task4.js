const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = function showPeople(userId) {
    const targetPerson = people.find(person => person.id === userId);
    if (targetPerson === undefined) {
        return null;
    }
    if (targetPerson.friends === null) {
        return [];
    }
    if (Array.isArray(targetPerson.friends)) {
        return people.filter(person => targetPerson.friends.includes(person.id));
    }
    return targetPerson;
};

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
