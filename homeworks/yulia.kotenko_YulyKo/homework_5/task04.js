const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edvard', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

const getPeople = (userId) => {
    const user = people.find(object => object.id === userId);
    if (!user) return null;
    if (Array.isArray(user.friends)) {
        return people.filter(friend => user.friends.includes(friend.id));
    }
    return [];
};

console.log(getPeople(100500));
console.log(getPeople(4));
console.log(getPeople(3));
