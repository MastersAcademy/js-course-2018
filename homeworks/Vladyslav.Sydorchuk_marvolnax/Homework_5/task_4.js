// task-4

const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    const friends = [];
    if (people.find(user => user.id === userId)) {
        people.forEach((obj) => {
            if (Array.isArray(obj.friends)) {
                if (obj.friends.includes(userId)) {
                    friends.push(obj);
                }
            }
        });
    } else {
        return null;
    }
    return friends;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
