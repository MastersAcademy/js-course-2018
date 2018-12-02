const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = (userId) => {
    const result = [];
    const friendsId = people.find(user => user.id === userId);
    if (friendsId) {
        friendsId.friends.forEach((id) => {
            result.push(people.find(user => user.id === id));
        });
    } else {
        return null;
    }
    return result;
};
console.log(getPeople(6));
console.log(getPeople(100500));
