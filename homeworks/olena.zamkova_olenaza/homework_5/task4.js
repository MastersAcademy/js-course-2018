const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
const getPeople = (userId) => {
    const person = people.find(user => userId === user.id);

    if (typeof (person) === 'undefined') {
        return null;
    }

    if (!person.friends) {
        return [];
    }

    return people.filter(user => person.friends.includes(user.id));
};

// output results

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
