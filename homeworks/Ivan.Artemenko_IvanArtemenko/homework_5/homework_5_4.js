const human = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];
function getHuman(userId) {
    const user = human.find(person => person.id === userId);
    if (typeof user === 'undefined') {
        return null;
    }
    if (Array.isArray(user.friends)) {
        return human.filter(person => user.friends.includes(person.id));
    }
    return [];
}
console.log(getHuman(2));
console.log(getHuman(4));
console.log(getHuman(100500));
