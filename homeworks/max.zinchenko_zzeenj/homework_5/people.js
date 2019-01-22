const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getPeople(id) {
    const result = [];
    let friends;
    const currentPerson = people.find(person => person.id === id);
    if (currentPerson) {
        ({ friends } = currentPerson);
    } else {
        return null;
    }
    people.forEach((name) => {
        if (friends && friends.indexOf(name.id) > -1) {
            result.push(name);
        }
    });
    return result;
}
console.log(getPeople(2, 4));
console.log(getPeople(100500));
