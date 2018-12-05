const getPeople = (people, userId) => {
    const result = [];
    const friendsIds = people.find(item => item.id === userId).friends;
    friendsIds.forEach((id) => {
        result.push(people.find(item => item.id === id));
    });
    return result;
};
const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

console.log(getPeople(people, 2));
