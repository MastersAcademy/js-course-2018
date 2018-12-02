const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const result = [];
    const objPeople = people.find(user => user.id === userId);
    if (!objPeople) {
        return 'We can\'t find this user ID';
    }
    if (objPeople.friends === null) {
        return 'This person is an introvert';
    }
    objPeople.friends.forEach((id) => {
        result.push(people.find(user => user.id === id));
    });
    return result;
}
console.log(getPeople(5));
console.log(getPeople(4));
console.log(getPeople(100500));
