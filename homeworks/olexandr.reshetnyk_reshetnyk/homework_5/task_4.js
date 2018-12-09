const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function numberInArray(array, number) {
    return Array.prototype.some.call(array, elem => elem === number);
}

const getPeople = function getPeople(userId) {
    function userExists() {
        return people.some(person => userId === person.id);
    }

    const result = [];
    if (!userExists()) {
        return null;
    }

    people.forEach((person) => {
        if (person.friends !== null) {
            if (numberInArray(person.friends, userId)) {
                result.push(person);
            }
        }
    });

    return result;
};


console.log(getPeople(2));
